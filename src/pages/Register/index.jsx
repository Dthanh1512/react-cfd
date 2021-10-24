import { useState } from "react"
import "../../assets/scss/common.scss"

export default function Register() {

    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    let mailPattern =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
    let phonePattern = /^ [\+] ? [(] ? [0 - 9]{ 3}[)]?[-\s\.]?[0 - 9]{ 3 } [-\s\.] ? [0 - 9]{ 4, 6 } $/;
    const onInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const newObject = { ...form, [name]: value };
        setForm(newObject);
    }
    console.log(form)
    const handleClick = () => {
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
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date">
                                <strong>Khai giảng:</strong> 15/11/2020
                            </div>
                            <div className="time">
                                <strong>Thời lượng:</strong> 18 buổi
                            </div>
                            <div className="time">
                                <strong>Học phí:</strong> 6.000.000 VND
                            </div>
                        </div>
                        <div className="form">
                            <label style={{ position: "relative", marginBottom: "40px" }}>
                                <p>
                                    Họ và tên<span>*</span>
                                </p>
                                <input onChange={onInputChange} name="name" value={form.name} type="text" placeholder="Họ và tên bạn" />
                                {
                                    error.name && <p className="error-text">{error.name}</p>
                                }
                            </label>
                            <label style={{ position: "relative", marginBottom: "40px" }}>
                                <p>
                                    Số điện thoại<span>*</span>
                                </p>
                                <input onChange={onInputChange} name="phone" value={form.phone} type="text" placeholder="Số điện thoại" />
                                {
                                    error.phone && <p className="error-text">{error.phone}</p>
                                }
                            </label>
                            <label style={{ position: "relative", marginBottom: "40px" }}>
                                <p>
                                    Email<span>*</span>
                                </p>
                                <input onChange={onInputChange} name="mail" value={form.mail} type="text" placeholder="Email của bạn" />
                                {
                                    error.mail && <p className="error-text">{error.mail}</p>
                                }
                            </label>
                            <label style={{ position: "relative", marginBottom: "40px" }}>
                                <p>
                                    URL Facebook<span>*</span>
                                </p>
                                <input onChange={onInputChange} name="url" value={form.url} type="text" placeholder="https://facebook.com" />
                                {
                                    error.url && <p className="error-text">{error.url}</p>
                                }
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input
                                    type="text"
                                    placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                                    onChange={onInputChange} name="content" value={form.content}
                                />
                            </label>
                            <div onClick={handleClick} className="btn main rect">đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
      <div class="contain">
          <div class="main-title">đăng ký thành công</div>
          <p>
              <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
              Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
              hoặc số điện thoại của bạn.
          </p>
      </div>
      <a href="/" class="btn main rect">về trang chủ</a>
  </div> */}
        </main >
    )
}