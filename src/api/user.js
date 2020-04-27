import { axios } from '../util/request'
import config from '../config/config'

export function Login(data) {
  return axios({
    url: config.address + '/login',
    method: 'post',
    data,
  })
}

export function Register(data) {
  return axios({
    url: config.address + '/register',
    method: 'post',
    data,
  })
}

export function Record(data) {
  return axios({
    url: config.address + '/homepage/record',
    method: 'post',
    data,
  })
}
