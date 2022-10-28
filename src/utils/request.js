import axios from 'axios'

// axios.defaults.baseURL =
//   'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL =
  'https://www.fastmock.site/mock/ea53b90d8b9f8c211a7a05410b478c97/elemo'

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: params })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const post = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
