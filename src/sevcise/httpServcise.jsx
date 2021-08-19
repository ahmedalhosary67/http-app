import axios from 'axios'

axios.interceptors.response.use(null, error => {
    const errorExpection = error.response && error.response.status >= 400 && error.response.status < 500
    if (!errorExpection) {
        console.log("Logging the error", error)
        alert("Unexoected error");
    }

    return Promise.reject(error)
})

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}