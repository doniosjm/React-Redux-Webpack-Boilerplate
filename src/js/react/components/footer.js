import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// actions
import {} from '../actions';

// components


/**
 * Footer component
 */
class footer extends React.Component {
    constructor(props) {
        // this.props is read-only
        // this.state can be modified
        super(props);
        this.state = {};
    }

    /**
     * Render component
     * @returns {JSX}
     */
    render() {
        return (
            <div className="footer">
                [footer]
            </div>
        );
    }
}

// define types for props
footer.propTypes = {
};

// define default values for props
footer.defaultProps = {
};

// map redux state to component props
const mapStateToProps = (state) => {
    return {
    }
};

// map redux dispatch actions to component functions
const mapDispatchToProps = (dispatch) => {
    return {
        openMenu: () => {
            dispatch(openMenu())
        }
    }
};

// connect component to redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(footer);