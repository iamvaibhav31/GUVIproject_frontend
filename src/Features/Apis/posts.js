import { makeRequest } from './makeRequest'




export function getPostdetails(id) {
     const res = makeRequest("/posts/" + id)
     console.log(res)
     return res
}