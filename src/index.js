import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import {Provider} from "react-redux";
import App from "./components/App";
import CreateBook from "./components/CreateBook";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import configureStore from './store';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
    <Router path="/" history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/create" component={CreateBook}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/delete/:id" component={Delete}/>
        </Route>
    </Router>
    </Provider>,
    document.getElementById("root")
);