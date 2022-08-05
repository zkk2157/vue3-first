import http from './index.js'

function sendUserName(url,username,password) {
    return http.post(url, null, {
        params: {
            username,
            password,
        }
    })
}

export {
    sendUserName
}