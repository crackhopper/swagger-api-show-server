import Env from './env';

let config = {
    env: Env,
    host: '192.168.6.224',
    port: Env==='development'?'8080':'81'
};
export default config;
