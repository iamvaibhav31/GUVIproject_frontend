import { makepostRequest } from './makeRequest'


export function register(data) {
     const res = makepostRequest("/register", data)
     console.log(res)
     return res
}

export function login(data) {
     const res = makepostRequest("/login", data)
     console.log(res)
     return res
}