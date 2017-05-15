import moment from 'Moment';
/**
 *
 * @param getState
 * @returns {function(*): function(*=)}
 */
function formatTimestamp({ getState }) {
    return (next) => (action) => {
        if (action.timestamp)
            action['formatTs'] = moment(action.timestamp).format('MMMM Do YYYY, h:mm:ss a');
        return next(action);
    }
}

export default formatTimestamp;