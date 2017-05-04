// react
import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// actions
import {closeMenu} from '../actions';

// components
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

/**
 * Menu component
 */
class menu extends React.Component {
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
            <div className={this.props.menu.show ? this.props.class + " open" : this.props.class}>
                <IconButton onTouchTap={this.props.closeMenu}><NavigationClose /></IconButton>
                <ul role="nav">
                    {/* Should I use onTouchTap on links? https://www.npmjs.com/package/react-router-link */}
                    <li><Link to="/" onClick={this.props.closeMenu}>Main</Link></li>
                    <li><Link to="/page2" onClick={this.props.closeMenu}>Page 2</Link></li>
                </ul>
            </div>
        );
    }
}

// define types for props
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
// https://www.npmjs.com/package/prop-types
menu.propTypes = {
    class: PropTypes.string,
    closeMenu: PropTypes.func
};

// define default values for props
menu.defaultProps = {
    class: 'menu'
};

// map redux state to component props
const mapStateToProps = (state) => {
    return {
        menu:{
            show: state.menu.show
        }
    }
};

// map redux dispatch actions to component functions
const mapDispatchToProps = (dispatch) => {
    return {
        closeMenu: () => {
            dispatch(closeMenu());
        }
    }
};

// connect component to redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(menu);