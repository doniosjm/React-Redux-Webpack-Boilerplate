// react
import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

/**
 * Home page
 */
class main extends React.Component {
    constructor(props) {
        super(props);
        document.title = this.props.title;
    };

    /**
     * render page
     * @returns {JSX}
     */
    render() {
        return (
            <div className="main">
                <h1>Main</h1>
            </div>
        )
    };
}

// define types for props
main.propTypes = {
    title: PropTypes.string
};

// define default values for props
main.defaultProps = {
    title: '[Main]'
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
)(main);