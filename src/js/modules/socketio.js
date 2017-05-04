var io = require('socket.io-client');

/**
 * Manages connection to a socket and it's events
 * @constructor
 */
var Socket = function (options) {
    'use strict';

    options = typeof options === 'undefined' ? {} : options;

    this.onConnect = null;
    this.onError = null;
    this.onDisconnect = null;
    this.onReconnect = null;
    this.onReconnectAttempt = null;
    this.onReconnecting = null;
    this.onReconnectError = null;
    this.onReconnectFailed = null;
    this.on = {};

    // Override defaults
    if (Object.keys(options).length) {
        for (var i in options) {
            if (options.hasOwnProperty(i)) {
                if (i.substr(0, 2) === 'on' && typeof this[i] === 'undefined')
                    this.on[i.substr(2).toLowerCase()] = options[i];
                else
                    this[i] = options[i];
            }
        }
    }

    this.init();
};

/**
 * Init
 */
Socket.prototype.init = function () {
    'use strict';
    this.setUpSocket();
};

/**
 * Connect to a socket and map events
 */
Socket.prototype.setUpSocket = function () {
    'use strict';
    var _this = this;
    this.connected = false;

    // connect
    this.socket = io.connect(_this['endpoint']);

    // on connect event
    this.socket.on('connect', function () {
        console.log('[socket.io] connected');
        _this.connected = true;
        // call the function passed in options
        if (_this.onConnect) _this.onConnect.call(_this, _this, _this.connected);
    });

    var events = {
        'onError': 'error',
        'onDisconnect': 'disconnect',
        'onReconnect': 'reconnect',
        'onReconnectAttempt': 'reconnect_attempt',
        'onReconnecting': 'reconnecting',
        'onReconnectError': 'reconnect_error',
        'onReconnectFailed': 'reconnect_failed'
    };

    // map event names to socket events
    for (var i in events) {
        if (events.hasOwnProperty(i)) {
            if (typeof this[i] === 'function') {
                this.socket.on(events[i], this[i].bind(this));
            }
        }
    }

    // setup custom events
    if (Object.keys(this.on).length) {
        for (var i in this.on) {
            if (this.on.hasOwnProperty(i)) {
                if (typeof this.on[i] === 'function') {
                    this.socket.on(i, this.on[i].bind(this));
                }
            }
        }
    }
};

/**
 * Emit a message on the socket
 * @param action
 * @param data
 */
Socket.prototype.send = function (action, data) {
    data = typeof data === 'undefined' ? {} : data;
    this.socket.emit(action, data);
};

/**
 * Emit a message to a specific room
 * @param room
 * @param action
 * @param data
 */
Socket.prototype.sendToRoom = function(room, action, data){
    action = typeof action === 'undefined' ? {} : action;
    data = typeof data === 'undefined' ? {} : data;
    // if a room is undefined or empty, emit the message on the socket
    if(!room || room === '')
        this.send(action, data);
    else
        io.sockets.in(room.toLowerCase()).emit(action, data);
};

module.exports = Socket;