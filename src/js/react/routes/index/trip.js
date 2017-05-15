// react
import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

/**
 * Lists trip info
 */
class trip extends React.Component {
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
            <div className="trip">
                <h3>Trip</h3>
            </div>
        )
    };
}

// define types for props
trip.propTypes = {
    title: PropTypes.string
};

// define default values for props
trip.defaultProps = {
    title: 'Trip - Octopus Dive Log'
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
)(trip);