import axios from "axios";

const dev = 'https://localhost:5001'

export const instance = axios.create({
    baseURL: dev,
    headers: {
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
    }
})
