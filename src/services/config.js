const api = 'http://cfd-reactjs.herokuapp.com'
export default api
export const refreshToken = async () => {
    const refreshToken = JSON.parse(localStorage.getItem('token')).refreshToken
    let res = await fetch(`${api}/elearning/v4/refresh-token`, {
        method: "POST",
        body: JSON.stringify({ refreshToken }),
        headers: {
            "Content-Type": "application/json",
        }
    }).then(res => res.json())

    localStorage.setItem('token', JSON.stringify(res.data))
}

export const callApiWithToken = (url, option) => {
    let token = JSON.parse(localStorage.getItem("token")).accessToken

    return fetch(url, {
        ...option,
        headers: {
            ...option.headers,
            "Authorization": `Bearer ${token}`,

        }
    }).then(async res => {
        if (res.status === 403) {
            await refreshToken()

            const token = JSON.parse(localStorage.getItem("token")).accessToken

            return fetch(url, {
                ...option,
                headers: {
                    ...option.headers,
                    "Authorization": `Bearer ${token}`,

                }
            }).then(res => res.json())
        }

        return res.json()
    })
}