import React from 'react'
import { useState } from 'react/cjs/react.development';
import { useAuth } from '../hooks/useAuth';
import { useForm } from '../hooks/useForm';
import Modal from '../Modal';




export default function LoginModal() {
    let { register, handleSubmit, error } = useForm();
    let { login, openLogin, togglePopupLogin } = useAuth();
    const submit = (form) => {

        login(form)
        togglePopupLogin(false)


    }
    return (

        <Modal>
            <div className="popup-form popup-login" style={{ display: openLogin ? 'flex' : 'none' }} onClick={() => togglePopupLogin(false)}>
                <div className="wrap" onClick={(e) => e.stopPropagation()}>
                    <div className="ct_login">
                        <h2 className="title">Đăng nhập</h2>
                        <form className="ct-login" style={{ dislay: 'block' }} onSubmit={handleSubmit(submit)}>
                            <input {...register('username', { required: true })} type="text" placeholder="Email / Số điện thoại" />
                            {
                                error.username && <p className="error">{error.username}</p>
                            }
                            <input {...register('password', { required: true, min: 6, max: 32 })} type="password" placeholder="Mật khẩu" />
                            {
                                error.password && <p className="error">{error.password}</p>
                            }
                            <div className="remember">
                                <label className="btn-remember">
                                    <div>
                                        <input type="checkbox" />
                                    </div>
                                    <p>Nhớ mật khẩu</p>
                                </label>
                                <a href="#" className="forget">
                                    Quên mật khẩu?
                                </a>
                            </div>
                            <button className="btn rect main btn-login">đăng nhập</button>
                            <div className="close">
                                <img src="img/close-icon.png" alt />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Modal>)
}
