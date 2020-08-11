const methodWrapper = method => (url, ...arg) =>
    method(`${process.env.REACT_APP_API_URL}${url}`, ...arg)
    .then((res) => res.json())

const get = methodWrapper((url, params) => fetch(url , { ...params, method: 'GET' }))

const post = methodWrapper((url, bodyObj, params) => fetch(url, {
    body: JSON.stringify(bodyObj), headers: {
        'Content-Type': 'application/json',
    }, ...params, method: 'POST' }))

export default {
    get,
    post
}
