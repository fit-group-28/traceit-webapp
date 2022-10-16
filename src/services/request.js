import axios from 'axios'

const request = axios.create({
    timeout: 15000,
})

request.interceptors.request.use((config) => {
    const token = localStorage.getItem('user')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

request.interceptors.response.use((res1) => {
    // console.log("res1ponse ---", res1)
    return res1.data
}, err => {
    // if not authorised, redirect to login
    if (err.response.status === 401) {
        window.location.href = '/account/login'
    }
    return Promise.reject(err)
})


export default request