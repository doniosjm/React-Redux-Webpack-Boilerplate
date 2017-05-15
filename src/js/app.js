"use strict";

// apps
import Index from './react/index';
import Admin from './react/admin';

// app
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // http://stackoverflow.com/a/34015469/988941

// Class
class App {
    // ctor
	constructor(options = {}) {
		this.path = '{{envPath}}';
		this.info(`${process.env.NODE_ENV} ${this.path}`);
	}

	// log info messages
	info(message = '') {
		console.info(`${Date.now()}: ${message}`);
	}

	// load the respective app
    switchApp(options = {app:'index'}){
	    console.log(options);
        switch(options.app) {
            case 'index':
                new Index({
                    app: this,
                    container: options.container,
                    socketio: {
                        autoHandshake: true,
                        endpoint: 'http://localhost:8383',
                        rooms: ['admin', 'sensorevents']
                    }
                });
                break;
            case 'admin':
                new Admin({
                    app: this,
                    container: options.container
                });
                break;
            default:
                console.log('View `' + options.app + '` does not exist');
        }
    }
};

module.exports = App;