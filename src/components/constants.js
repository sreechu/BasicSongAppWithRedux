import axios from "axios";
export const AUTH_URL = "https://accounts.spotify.com/authorize";
export const API_URL = "https://api.spotify.com/v1/me/tracks";
export const my_app = axios.create({baseURL: API_URL});
export const CLIENT_ID = '4cb3fd840b784b8f937c081a7212e9d3';
export const CLIENT_SECRET = '6d35dc415b324964abbe8590095772db';
export const RESPONSE_TYPE = 'code';
export const CODE_CHALLENGE_METHOD = 'S256';
export const STATE = 'e21392da45dbf4';


const crypto = require('crypto');

const hash = crypto.createHash('sha256')
                   .update('test')
                   .digest('base64');
export const ENCODED_CHALLENGE =  hash;

export const SCOPES = [
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
];



  export const REDIRECT_URL = "http://localhost:3000";