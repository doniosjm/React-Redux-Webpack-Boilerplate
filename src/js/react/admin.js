// react
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducers from './reducers/index';

// middleware
// import contentful from './middleware/contentful';
import formatTimestamp from './middleware/formatTimestamp';
import reduxActionLogger from './middleware/reduxActionLogger';

// themes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// routes
import Main from './routes/admin/main';

// components
import Header from './components/header';
import Menu from './components/menuAdmin';
import Footer from './components/footer';

/**
 * Render a themed App with Redux
 */
class admin {
    constructor(options = {}) {
        const appElement = document.getElementById(options.container);
        if(appElement) {

            // loaded from somewhere else
            let preloadedState = {
                menu: {
                    show: false
                }
            };

            // create redux store
            const store = createStore(rootReducers, preloadedState, applyMiddleware(formatTimestamp, reduxActionLogger));

            // render app
            ReactDOM.render(
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <Provider store={store}>
                        <Router>
                            <div>
                                <Menu/>
                                <Header/>
                                <Route path="/" exact component={Main}/>
                                <Footer/>
                            </div>
                        </Router>
                    </Provider>
                </MuiThemeProvider>,
                appElement,
                () => {
                    console.log('[react] admin app loaded');
                }
            );
        }
        else{
            document.write('React container element not found');
        }
    }
}

export default admin;