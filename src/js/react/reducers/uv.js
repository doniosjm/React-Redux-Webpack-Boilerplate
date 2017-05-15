const uv = (state = {}, action) => {
    switch (action.type) {
        case 'SENSOR_UV_NEW_VALUE':
            return {
                timestamp: action.formatTs,
                value: action.value
            };
        default:
            return state;
    }
};

export default uv;