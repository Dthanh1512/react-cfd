
function CourseList(props) {
    let badgeClass = props.course_status == "sap-khai-gian" ? 'b1' : props.course_status === "dang-dien-ra " ? 'b2' : 'b3'
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <a className="cover" href="#">
                    <img src={props.thumbnail.link} alt="" />
                    <span className={`badge ${badgeClass}`}>{props.course_status === "sap-khai-gian" ? "Sắp khai giảng" : props.course_status === "dang-dien-ra" ? "Đang diễn ra" : "Đã kết thúc"}</span>
                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
                            </div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" />
                            </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </a>
                <div className="info">
                    <a className="name" href="#">
                        {props.slug}
                    </a>
                    <p className="des">
                        {props.short_description}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={props.teacher.avatar.link} alt="" />
                        </div>
                        <div className="name">{props.teacher.title}</div>
                    </div>
                    <div className="register-btn">Đăng Ký</div>
                </div>
            </div>
        </div>
    )
}

export default CourseList