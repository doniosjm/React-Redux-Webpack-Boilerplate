const rfid = (state = {}, action) => {
    switch (action.type) {
        case 'SENSOR_RFID_NEW_VALUE':
            return {
                timestamp: action.formatTs,
                value: action.value
            };
        default:
            return state;
    }
};

export default rfid;