

function CourseList({ name, teacher, status, description, like, person }) {
    var statusHas = status;
    if (status === "Đã kết thúc") {
        statusHas = <span className="badge b1">Đã kết thúc</span>
    }
    if (status === "Đang diễn ra") {
        statusHas = <span className="badge b2">Đang diễn ra</span>
    }
    if (status === "Sắp khai giảng") {
        statusHas = <span className="badge b3">Sắp khai giảng</span>
    }
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src="/img/img1.png" alt="" />
                    {statusHas}
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                                {person}</div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> {like}
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {name}
                    </a>
                    <p className="des">
                        {description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">{teacher}</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}

export default CourseList