import axios from 'axios';
import cfg from '../config/config';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'API接口预览';
    window.document.title = title;
};

const ajaxUrl = `http://${cfg.host}:${cfg.port}`

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;
