// react
import React from 'react';
import PropTypes from 'prop-types';

// components

// redux
import { connect } from 'react-redux';

/**
 * Page 2 route
 */
class page2 extends React.Component {
    constructor(props) {
        super(props);
        document.title = this.props.title;
    }

    /**
     * Component did mount
     * https://facebook.github.io/react/docs/react-component.html
     */
    componentDidMount(){
        console.log('[routes/page2] componentDidMount');
    }

    /**
     * Component will unmount
     * https://facebook.github.io/react/docs/react-component.html
     */
    componentWillUnmount(){
        console.log('[routes/page2] componentWillUnmount');
    }

    /**
     * render page
     * @returns {XML}
     */
    render() {
        return (
            <div className="page2">
                <h1>Page 2</h1>
            </div>
        )
    };
}

// define types for props
page2.propTypes = {
    title: PropTypes.string
};

// define default values for props
page2.defaultProps = {
    title: '[Page 2]'
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
)(page2);