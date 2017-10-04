import axios from 'axios'

let token = window.localStorage.getItem('token') || ''
const http = axios.create({
  baseURL: 'http://localhost:3000'
})

const mapData = (resp) => resp.data
export const login = (username, password) => http
  .post('/login', {
    username,
    password
  })
  .then((resp) => resp.data)
  .then(data => {
    token = data.token
    window.localStorage.setItem('token', token)
  })
const post = (url, data, config) => http
.post(url, data, {
  headers: {
    'X-header': token
  },
  ...config
})
.then(mapData)
export const checkin = () => post('/checkin')

export const checkout = () => post('/checkout')
