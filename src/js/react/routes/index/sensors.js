// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import Paper from 'material-ui/Paper';

// modules
import Socket from '../../../modules/socketio';

// redux
import { connect } from 'react-redux';

// actions
import {newUvValue,newTempValue,newHumValue,newRfidValue,newGpsValue} from '../../actions/sensor';

/**
 * Lists sensor data
 */
class sensors extends React.Component {
    constructor(props) {
        super(props);
        document.title = this.props.title;

        let socketioOptions = {
            autoHandshake: props.socketio.autoHandshake,
            endpoint: props.socketio.endpoint
        };

        // join rooms when socketio is connected
        socketioOptions.onConnect = (socket, connected) => {
            // join rooms
            for(var room in props.socketio.rooms)
            {
                socket.send('join', {room: props.socketio.rooms[room]});
            }
        };

        // wire up socketio events to redux dispatch
        socketioOptions.onUv    = (data) => {props.dispatch(newUvValue(data))};
        socketioOptions.onTemp  = (data) => {props.dispatch(newTempValue(data))};
        socketioOptions.onHum   = (data) => {props.dispatch(newHumValue(data))};
        socketioOptions.onRfid  = (data) => {props.dispatch(newRfidValue(data))};
        socketioOptions.onGps   = (data) => {props.dispatch(newGpsValue(data))};

        // startup socketio
        let socket = new Socket(socketioOptions);
    }

    /**
     * render page
     * @returns {JSX}
     */
    render() {
        return (
            <div className="sensors">
                <Paper style={style} zDepth={2}>
                    <h3>Temperature</h3>
                    <p>{this.props.temp.timestamp}</p>
                    <p>{this.props.temp.format}</p>
                </Paper>
                <Paper style={style} zDepth={2}>
                    <h3>Humidity</h3>
                    <p>{this.props.hum.timestamp}</p>
                    <p>{this.props.hum.value}</p>
                </Paper>
                <Paper style={style} zDepth={2}>
                    <h3>UV Index</h3>
                    <p>{this.props.uv.timestamp}</p>
                    <p>{this.props.uv.value}</p>
                </Paper>
            </div>
        )
    };
}

// define types for props
sensors.propTypes = {
    title: PropTypes.string
};

// define default values for props
sensors.defaultProps = {
    title: 'Sensors - Octopus Dive Log'
};

const style = {
    margin: 10,
    height: 350,
    width: 350
};

// map redux state to component props
const mapStateToProps = (state) => {
    return {
        temp: state.temp,
        hum: state.hum,
        uv: state.uv
    }
};

// map redux dispatch actions to component functions
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

// connect component to redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sensors);