import http from './index.js'

//判断账户是否已经存在
function isExist(url,username) {
    return http.post(url, null, {
        params: {
            username,
        }
    })
}

export {
    isExist
}