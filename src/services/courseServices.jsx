import api, { callApiWithToken, refreshToken } from './config'


const homeApi = {
    home() {
        return fetch(`${api}/elearning/v4/home`).then(res => res.json())
    },
    register(slug, data) {
        // const token = JSON.parse(localStorage.getItem("token")).accessToken

        // return fetch(`${api}/elearning/v4/course-register/${slug}`, {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": `Bearer ${token}`
        //     }
        // }).then(async res => {
        //     if (res.status === 403) {
        //         await refreshToken()

        //         const token = JSON.parse(localStorage.getItem("token")).accessToken

        //         return fetch(`${api}/elearning/v4/course-register/${slug}`, {
        //             method: "POST",
        //             body: JSON.stringify(data),
        //             headers: {
        //                 "Content-Type": "application/json",
        //                 "Authorization": `Bearer ${token}`
        //             }
        //         }).then(res => res.json())
        //     }
        // })
        return callApiWithToken(
            `${api}/elearning/v4/course-register/${slug}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
}
export default homeApi