const gps = (state = {}, action) => {
    switch (action.type) {
        case 'SENSOR_GPS_NEW_VALUE':
            return {
                timestamp: action.formatTs,
                value: action.value
            };
        default:
            return state;
    }
};

export default gps;