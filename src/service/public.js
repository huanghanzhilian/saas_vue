import axios from 'axios'
import qs from 'qs';
// axios.defaults.timeout = 5000
//axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
export default {
  fetchGet (url, params = {}) {
    //console.log(params)
    return new Promise((resolve, reject) => {
      axios.get(url, {params:params}).then(res => {
      //axios.get(url).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
      //console.log(qs.stringify(params))
      axios.post(url, qs.stringify(params)).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
