// react
import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

/**
 * Lists which guests are off the vessel and on the vessel
 */
class guestStatus extends React.Component {
    constructor(props) {
        super(props);
        document.title = this.props.title;
    }

    /**
     * render page
     * @returns {JSX}
     */
    render() {
        return (
            <div className="guestStatus">
                <h1>Guest Status</h1>
            </div>
        )
    };
}

// define types for props
guestStatus.propTypes = {
    title: PropTypes.string
};

// define default values for props
guestStatus.defaultProps = {
    title: 'Guest Status - Octopus Dive Log'
};


// map redux state to component props
const mapStateToProps = (state) => {
    return {}
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
)(guestStatus);