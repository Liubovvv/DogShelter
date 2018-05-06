import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import {Container} from "./Container";

const Root =  ({store})  => (
    <Provider store={store}>
         <Router>
             <Container />
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