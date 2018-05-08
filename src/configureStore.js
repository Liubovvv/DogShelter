import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import createMiddleware from 'store/middleware';

const middleware = createMiddleware();
const configureStore = () => {

    /* eslint-disable no-underscore-dangle */
    return createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware( ...middleware ),
    );
    /* eslint-enable */
};

export default configureStore;