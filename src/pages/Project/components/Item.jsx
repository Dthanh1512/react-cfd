export default function Item({ name, person }) {
    return (
        <a href="#" className="item col-md-6">
            <div className="wrap">
                <div className="cover">
                    <img src="img/project/project (1).jpg" alt="" />
                </div>
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="makeby">Hoàn thành với {person} </div>
                </div>
            </div>
        </a>
    )
}