import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import {Layout} from "./Layout";

const App =  ({store})  => (
    <Provider store={store}>
         <Router>
             <Layout />
         </Router>
    </Provider>
);

App.propTypes = {
    store: PropTypes.oneOfType( [
        PropTypes.func.isRequired,
        PropTypes.object.isRequired,
    ] ).isRequired,
};


export default App;