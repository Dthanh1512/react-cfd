import api, { callApiWithToken, refreshToken } from './config'


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
    },
    updateInfo(form) {

        // let token = JSON.parse(localStorage.getItem("token")).accessToken
        // return fetch(`${api}/elearning/v4/profile/update`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         "Authorization": `Bearer ${token}`
        //     },
        //     body: JSON.stringify(form),

        // }).then(async res => {
        //     if (res.status === 403) {
        //         await refreshToken()

        //         const token = JSON.parse(localStorage.getItem("token")).accessToken

        //         return fetch(`${api}/elearning/v4/profile/update`, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 "Authorization": `Bearer ${token}`
        //             },
        //             body: JSON.stringify(form),

        //         }).then(res => res.json())
        //     }
        // })

        return callApiWithToken(
            `${api}/elearning/v4/profile/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),

        })
    }
}
export default authApi;