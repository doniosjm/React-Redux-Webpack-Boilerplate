const uv = (state = {}, action) => {
    let format = action.value+'\xB0C';
    switch (action.type) {
        case 'SENSOR_TEMP_NEW_VALUE':
            return {
                timestamp: action.formatTs,
                value: action.value,
                format: format
            };
        default:
            return state;
    }
};

export default uv;