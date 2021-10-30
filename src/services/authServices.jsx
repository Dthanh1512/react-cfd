import api from './config'

const authApi = {
    login(user) {
        return fetch(`${api}/elearning/v4/login`, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        }).then(res => res.json())
    }
}
export default authApi;