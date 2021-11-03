import { useState } from "react"
import { useParams } from "react-router";
import "../../assets/scss/common.scss"
import { useForm } from "../../hooks/useForm";
import homeApi from "../../services/courseServices";

export default function Register() {
    let { id } = useParams();// lấy nhanh gía trị

    let { form, register, handleSubmit, error } = useForm();

    const submit = async (form) => {
        let res = await homeApi.register(
            id,
            form,
        )

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
                        <form className="form" onSubmit={handleSubmit(submit)}>
                            <label className="label">
                                <p>
                                    Họ và tên<span>*</span>
                                </p>
                                {/* <input onChange={onInputChange} name="name" value={form.name} type="text" placeholder="Họ và tên bạn" /> */}

                                {/* LocalStorage
                                <input onChange={(ev) => setName(ev.currentTarget.value)} value={name} type="text" placeholder="Họ và tên bạn" /> */}
                                <input {...register('name', { required: true })} type="text" placeholder="Họ và tên bạn" />
                                {
                                    error.name && <p className="error-text">{error.name}</p>
                                }
                            </label>
                            <label className="label">
                                <p>
                                    Số điện thoại<span>*</span>
                                </p>
                                <input {...register('phone', { pattern: "phone" })} type="text" placeholder="Số điện thoại" />
                                {
                                    error.phone && <p className="error-text">{error.phone}</p>
                                }
                            </label>
                            <label className="label">
                                <p>
                                    Email<span>*</span>
                                </p>
                                <input {...register('email')} type="text" placeholder="Email của bạn" />
                                {
                                    error.email && <p className="error-text">{error.email}</p>
                                }
                            </label>
                            <label className="label">
                                <p>
                                    URL Facebook<span>*</span>
                                </p>
                                <input {...register('url')} type="text" placeholder="https://facebook.com" />
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
                                // onChange={onInputChange} name="content" value={form.content}
                                />
                            </label>
                            {/* <button onClick={handleClick} className="btn main rect">đăng ký</button> */}
                            <button className="btn main rect">đăng ký</button>
                        </form>
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