import Axios from "./Axios";



export function makepostRequest(url, options) {
     return Axios.post(url, options)
          .then(res => res.data)
          .catch(err => Promise.reject(err?.response?.data?.message ?? "Something Went Wrong!"))
}