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

export function View(data) {
  return axios({
    url: config.address + '/homepage/view',
    method: 'post',
    data,
  })
}

export function Delete(data) {
  return axios({
    url: config.address + '/homepage/view',
    method: 'delete',
    data,
  })
}

export function ViewDelete() {
  return axios({
    url: config.address + '/homepage/view/deleteBill',
    method: 'get',
  })
}

export function DeleteBill(data) {
  return axios({
    url: config.address + '/homepage/view/deleteBill/delete',
    method: 'delete',
    data,
  })
}

export function RestoreBill(data) {
  return axios({
    url: config.address + '/homepage/view/deleteBill/restore',
    method: 'post',
    data,
  })
}

export function ClearBill() {
  return axios({
    url: config.address + '/homepage/view/deleteBill/clear',
    method: 'get',
  })
}

export function analysicBill(data) {
  return axios({
    url: config.address + '/homepage/analysicBill',
    method: 'post',
    data,
  })
}

