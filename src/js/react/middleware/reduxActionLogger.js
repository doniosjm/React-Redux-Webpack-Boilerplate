/**
 * Logs redux actions that have been dispatched
 * @param getState
 * @returns {function(*): function(*=)}
 */
function reduxActionLogger({ getState }) {
    return (next) => (action) => {
        // for debugging, list action types here you want to output to console
        let typesToDebug = [''];
        let outputToConsole = typesToDebug.indexOf(action.type) >= 0;

        if(outputToConsole) console.log('will dispatch', action);

        // Call the next dispatch method in the middleware chain.
        let returnValue = next(action);

        if(outputToConsole) console.log('state after dispatch', getState());

        // This will likely be the action itself, unless
        // a middleware further in chain changed it.
        return returnValue;
    }
}

export default reduxActionLogger;