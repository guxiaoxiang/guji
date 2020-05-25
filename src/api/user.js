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
    url: config.address + '/bar/record',
    method: 'post',
    data,
  })
}

export function View(data) {
  return axios({
    url: config.address + '/bar/view',
    method: 'post',
    data,
  })
}

export function Delete(data) {
  return axios({
    url: config.address + '/bar/view',
    method: 'delete',
    data,
  })
}

export function ViewDelete() {
  return axios({
    url: config.address + '/bar/view/deleteBill',
    method: 'get',
  })
}

export function DeleteBill(data) {
  return axios({
    url: config.address + '/bar/view/deleteBill/delete',
    method: 'delete',
    data,
  })
}

export function RestoreBill(data) {
  return axios({
    url: config.address + '/bar/view/deleteBill/restore',
    method: 'post',
    data,
  })
}

export function ClearBill() {
  return axios({
    url: config.address + '/bar/view/deleteBill/clear',
    method: 'get',
  })
}

export function analysicBill(data) {
  return axios({
    url: config.address + '/bar/analysicBill',
    method: 'post',
    data,
  })
}

export function modifyInfo(data) {
  return axios({
    url: config.address + '/bar/my/userInfo',
    method: 'post',
    data,
  })
}

export function modifyPassword(data) {
  return axios({
    url: config.address + '/bar/my/modifyPassword',
    method: 'post',
    data,
  })
}
