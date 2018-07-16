import Env from './env';

let config = {
    env: Env,
    host: '172.16.60.40',
    port: Env==='development'?'8080':'81'
};
export default config;
