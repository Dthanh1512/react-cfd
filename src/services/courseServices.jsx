import api from './config'

const homeApi = {
    home() {
        return fetch(`${api}/elearning/v4/home`).then(res => res.json())
    }
}
export default homeApi