const menu = (state, action) => {
    if(!state) state = {show: false};
    switch (action.type) {
        case 'MENU_OPEN':
            return {
                show: true
            };
        case 'MENU_CLOSE':
            return {
                show: false
            };
        default:
            return state;
    }
};

export default menu;