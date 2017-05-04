// react
import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// actions
import {openMenu} from '../actions';

// components
import AppBar from 'material-ui/AppBar';

/**
 * Header component
 */
class header extends React.Component {
    constructor(props) {
        // this.props is read-only
        // this.state can be modified
        super(props);
    }

    /**
     * Render component
     * @returns {JSX}
     */
    render() {
        return (
            <AppBar
                title={this.props.title}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={()=>{this.props.openMenu()}}
            />);
    }
}

// define types for props
header.propTypes = {
    title: PropTypes.string
};

// define default values for props
header.defaultProps = {
    title: 'App Title'
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
)(header);