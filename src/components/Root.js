import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import {Greeting} from "./Greeting";

const Root =  store  => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Greeting} />

        </Router>
    </Provider>
);
Root.propTypes = {
    store: PropTypes.oneOfType( [
        PropTypes.func.isRequired,
        PropTypes.object.isRequired,
    ] ).isRequired,
};


export default Root;