import Env from './env';

let config = {
    env: Env,
    host: 'localhost',
    port: Env==='development'?'8080':'81'
};
export default config;
