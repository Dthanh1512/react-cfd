import { useState } from "react"
import "../../../assets/scss/common.scss"

export default function Information() {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    let mailPattern =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    let phonePattern = /^ [\+] ? [(] ? [0 - 9]{ 3}[)]?[-\s\.]?[0 - 9]{ 3 } [-\s\.] ? [0 - 9]{ 4, 6 } $/;
    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const newObject = { ...form, [name]: value };
        setForm(newObject);
    }
    const handleSubmit = () => {
        let errorObject = {}
        if (!form.name) {
            errorObject.name = "Vui lòng điền họ tên";
        } else if (form.name.length <= 8) {
            errorObject.name = "Tên của bạn phải lớn hơn 8 ký tự!";
        }
        if (!form.phone) {
            errorObject.phone = "Vui lòng điền số điện thoại";
        } else if (!phonePattern.test(form.phone)) {
            errorObject.phone = "Vui lòng nhập đúng định dạng";
        }
        if (!form.mail) {
            errorObject.mail = "Vui lòng điền địa chỉ mail";
        } else if (!mailPattern.test(form.mail)) {
            errorObject.mail = "Vui lòng nhập đúng định dạng mail"
        }
        if (!form.url) {
            errorObject.url = "Vui lòng điền địa chỉ Facebook"
        }
        setError(errorObject);
        if (Object.keys(errorObject).length === 0) {
            alert("Thành công")
        }
    }

    return (
        <div className="tab1">
            <label className="label">
                <p>Họ và tên<span>*</span></p>
                <input onChange={handleInput} value={form.name} name="name" type="text" placeholder="Nguyễn Văn A" />
                {
                    error.name && <p className="error-text">{error.name}</p>
                }
            </label>
            <label className="label">
                <p>Số điện thoại<span>*</span></p>
                <input onChange={handleInput} value={form.phone} name="phone" type="text" placeholder="0949******" />
                {
                    error.name && <p className="error-text">{error.phone}</p>
                }
            </label>
            <label className="label">
                <p>Email<span>*</span></p>
                <input onChange={handleInput} value={form.email} name="email" defaultValue="vuong.dang@dna.vn" disabled type="text" />
                {
                    error.name && <p className="error-text">{error.email}</p>
                }
            </label>
            <label className="label">
                <p>Facebook<span>*</span></p>
                <input onChange={handleInput} value={form.url} type="text" name="url" placeholder="Facebook url" />
                {
                    error.name && <p className="error-text">{error.url}</p>
                }
            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input onChange={handleInput} value={form.skype} type="text" placeholder="Skype url" />
            </label>
            <div onClick={handleSubmit} className="btn main rect">LƯU LẠI</div>
        </div>
    )
}