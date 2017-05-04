"use strict";

// Object destructuring
const {STATE, STATUS} = require('./consts');

// apps
import Index from './react/index';

// Class
class App {
    // ctor
	constructor(options = {}) {
		this.path = '{{envPath}}';
		this.info(`${process.env.NODE_ENV} ${STATE} ${this.path}`);
	}

	// log info messages
	info(message = '') {
		console.info(`${Date.now()}: ${message}`);
	}

	// load the respective app
    switchApp(options = {app:'index'}){
        switch(options.app) {
            case 'index':
                new Index({
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