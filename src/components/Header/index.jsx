import { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../App";
import { Context } from "../../hooks/useAuth";


export function Header() {
    let { user, logout, togglePopupLogin } = useContext(MainContext);

    return (

        <header id="header">
            <div className="wrap">
                <div className="menu-hambeger">
                    <div className="button">
                        <span />
                        <span />
                        <span />
                    </div>
                    <span className="text">menu</span>
                </div>
                <a href="#" className="logo">
                    <img src="/img/logo.svg" alt />
                    <h1>CFD</h1>
                </a>
                <div className="right">
                    {user ? (<div className="have-login">
                        <div className="account">
                            <a href="#" className="info">
                                <div className="name">{user.title}</div>
                                <div className="avatar">
                                    <img src={user?.avatar?.link} alt="" />
                                </div>
                            </a>
                        </div>
                        <div className="hamberger"></div>
                        <div className="sub">
                            <a href="#">Khoá học của tôi</a>
                            <Link to="/profile">Thông tin tài khoản</Link>
                            <Link to="#" onClick={(ev) => { ev.preventDefault(); logout() }}>Đăng xuất</Link>
                        </div>
                    </div>) :
                        (<div class="not-login bg-none">
                            <a href="#" class="btn-register" onClick={e => { e.preventDefault(); togglePopupLogin(true) }}>Đăng nhập</a>
                            <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
                        </div>)}
                </div>
            </div>
        </header>
    )
}