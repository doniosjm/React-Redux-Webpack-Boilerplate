// react
import React from 'react';
import PropTypes from 'prop-types';

// components

// redux
import { connect } from 'react-redux';

/**
 * route
 */
class main extends React.Component {
    constructor(props) {
        super(props);
    };

    /**
     * Component did mount
     * https://facebook.github.io/react/docs/react-component.html
     */
    componentDidMount(){
        console.log('[routes/main] componentDidMount');
    }

    /**
     * Component will unmount
     * https://facebook.github.io/react/docs/react-component.html
     */
    componentWillUnmount(){
        console.log('[routes/main] componentWillUnmount');
    }

    /**
     * Render page
     * @returns {XML}
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
    return {}
};

// connect component to redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(main);