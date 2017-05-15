// react
import React from 'react';
import PropTypes from 'prop-types';

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
     * render page
     * @returns {JSX}
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
    return {
        dispatch: dispatch
    }
};

// connect component to redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(page2);