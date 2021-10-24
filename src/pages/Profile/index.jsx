import Information from "./conmponents/Information";
import YourCourse from "./conmponents/YourCourse";
import Project from "./conmponents/Project";
import HistoryPay from "./conmponents/HistoryPay";
import YourCoin from "./conmponents/YourCoin";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom"

export default function Profile() {
    let { url } = useRouteMatch();
    return (

        <main className="profile" id="main">
            <section>
                <div className="top-info">
                    <div className="avatar">
                        {/* <span class="text">H</span> */}
                        <img src="img/avatar-lg.png" alt="" />
                        <div className="camera" />
                    </div>
                    <div className="name">trần nghĩa</div>
                    <p className="des">Thành viên của team CFD1-OFFLINE</p>
                </div>
                <div className="container">
                    <div className="tab">
                        <div className="tab-title">
                            <NavLink to={`${url}`} exact>Thông tin tài khoản</NavLink>
                            <NavLink to={`${url}/your-course`}>Khóa học của bạn</NavLink>
                            <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
                            <NavLink to={`${url}/history-pay`}>Lịch sử thanh toán</NavLink>
                            <NavLink to={`${url}/your-coin`}>Quản lý COIN của tôi</NavLink>
                        </div>
                        <div className="tab-content">
                            <Switch>
                                <Route path={`${url}`} exact component={Information} />
                                <Route path={`${url}/your-course`} component={YourCourse} />
                                <Route path={`${url}/project`} component={Project} />
                                <Route path={`${url}/history-pay`} component={HistoryPay} />
                                <Route path={`${url}/your-coin`} component={YourCoin} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}