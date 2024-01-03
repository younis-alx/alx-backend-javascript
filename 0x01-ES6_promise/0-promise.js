export default function getResponseFromAPI(){
    return new Promise((res, rej) => {
        const error = false;
        error ? rej('5xx status code') : res('2xx status code')
    })
}
