import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import config from 'config';

export default function create() {
    const middleware = [
        thunk,
        promiseMiddleware(),
        //routerMiddleware(browserHistory),
    ];

    if (config.isDevelopment) {
        const logger = createLogger();
        middleware.push(logger);
    }

    return middleware;
}