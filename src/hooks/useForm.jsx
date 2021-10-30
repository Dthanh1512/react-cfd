import { useState } from "react";


let mailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
let phonePattern = /^ [\+] ? [(] ? [0 - 9]{ 3}[)]?[-\s\.]?[0 - 9]{ 3 } [-\s\.] ? [0 - 9]{ 4, 6 } $/;

export const useForm = (invitVlaue = {}) => {
    const [form, setForm] = useState(invitVlaue);
    const [error, setError] = useState({});
    const rules = {}

    const onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const newObject = { ...form, [name]: value };
        setForm(newObject);
    }

    const check = () => {
        let errorObject = {}
        for (let i in rules) {
            let r = rules[i];
            if (r.required && !form[i]) {
                errorObject[i] = "Giá trị không được bỏ trống";
            }
            if (r.pattern && form[i]) {
                let pattern = r.pattern;
                if (r.pattern === "phone") pattern = phonePattern;
                if (r.pattern === "mail") pattern = mailPattern;
                if (!pattern.test(form[i])) {
                    errorObject[i] = "Giá trị này không đúng định dạng"
                }
            }
            if (r.min && (typeof form[i] === "undefined" || r.min > form[i]?.length)) {
                errorObject[i] = `Trường này không được nhỏ hơn ${r.min} ký tự`
            }
            if (r.max < form[i]?.length) {
                errorObject[i] = `Trường này không được lớn hơn ${r.max} ký tự`
            }
        }
        // if (!form.name) {
        //     errorObject.name = "Vui lòng điền họ tên";
        // } else if (form.name.length <= 8) {
        //     errorObject.name = "Tên của bạn phải lớn hơn 8 ký tự!";
        // }
        // if (!form.phone) {
        //     errorObject.phone = "Vui lòng điền số điện thoại";
        // } else if (!phonePattern.test(form.phone)) {
        //     errorObject.phone = "Vui lòng nhập đúng định dạng";
        // }
        // if (!form.mail) {
        //     errorObject.mail = "Vui lòng điền địa chỉ mail";
        // } else if (!mailPattern.test(form.mail)) {
        //     errorObject.mail = "Vui lòng nhập đúng định dạng mail"
        // }
        // if (!form.url) {
        //     errorObject.url = "Vui lòng điền địa chỉ Facebook"
        // }
        setError(errorObject);
        return errorObject;

    }
    function register(name, rule) {
        if (rule) {
            rules[name] = rule;
        }
        return {
            name,
            onChange: onInputChange,
            value: form[name],
        }
    }
    function handleSubmit(callBack) {
        return (ev) => {
            ev.preventDefault();
            let error = check();
            if (Object.keys(error).length === 0) {
                callBack(form);
            }
            setError(error);
        }
    }
    return {
        form,
        register,
        handleSubmit,
        error,
    }
}