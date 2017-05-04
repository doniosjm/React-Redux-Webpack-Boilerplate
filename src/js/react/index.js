// react
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import rootReducers from './reducers/index';

// middleware
import contentful from './middleware/contentful';
import reduxActionLogger from './middleware/reduxActionLogger';

// themes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// routes
import Main from './routes/main';
import Page2 from './routes/page2';

// components
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';

// app
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // http://stackoverflow.com/a/34015469/988941

/**
 * Render a themed App with Redux
 */
class index {
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
            const store = createStore(rootReducers, preloadedState, applyMiddleware(reduxActionLogger));

            // render app
            ReactDOM.render(
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <Provider store={store}>
                        <Router>
                            <div>
                                <Menu/>
                                <Header/>
                                <Route path="/" exact component={Main}/>
                                <Route path="/page2" component={Page2}/>
                                <Footer/>
                            </div>
                        </Router>
                    </Provider>
                </MuiThemeProvider>,
                appElement,
                () => {
                    console.log('[react] index app loaded');
                }
            );
        }
        else{
            document.write('React container element not found');
        }
    }
}

export default index

//
// export default connect(
//     state => ({})
// )(index);