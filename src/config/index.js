const mode = process.env.NODE_ENV || 'development';
const environment = {
    development: {
        isDevelopment: true,
    },
    production: {
        isDevelopment: false,
    },
}[mode];

let config, envConfig;

try {
    envConfig = require(`./${mode}`);
    config = Object.assign({
        publicUrl: process.env.PUBLIC_URL,
        apiUrl: process.env.REACT_APP_API_URL,
    }, environment, envConfig.default);
} catch (e) {
    throw new Error('INVALID CONFIG FILE');
}

export default Object.freeze(config);
