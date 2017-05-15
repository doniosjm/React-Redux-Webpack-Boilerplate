import { combineReducers } from 'redux';
import uv from './uv';
import temp from './temp';
import hum from './hum';
import rfid from './rfid';
import gps from './gps';
import menu from './menu';
import pageContent from './pageContent';

const myReducers = combineReducers({uv, temp, hum, rfid, gps, menu, pageContent});

export default myReducers