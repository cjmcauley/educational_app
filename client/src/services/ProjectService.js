const baseURL = 'http://localhost:3000/api/projects/'

export default {
  getProject(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
