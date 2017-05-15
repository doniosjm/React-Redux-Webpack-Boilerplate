const hum = (state = {}, action) => {
    switch (action.type) {
        case 'SENSOR_HUM_NEW_VALUE':
            return {
                timestamp: action.formatTs,
                value: action.value
            };
        default:
            return state;
    }
};

export default hum;