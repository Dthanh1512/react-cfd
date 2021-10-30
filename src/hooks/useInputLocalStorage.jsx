import { useEffect, useState } from "react"

export const useInputLocalStorage = (name, value = "") => {
    //khi có data thì lấy get item, k có thì lấy value
    let [state, setState] = useState(localStorage.getItem(name) || value);
    useEffect(() => {
        if (!state) {
            localStorage.setItem(name, state);
        }

    }, [state])
    return [state, setState]
}