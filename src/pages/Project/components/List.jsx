import Item from "./Item"

export default function List(props) {
    return (
        <section className="section-1">
            <div className="container">
                <h2 className="main-title">dự án</h2>
                <p className="top-des">
                    {props.description}
                </p>
                <div className="list row">
                    {
                        props.list.map((value, key) => (
                            <Item
                                name={value.name}
                                person={value.person} />
                        ))
                    };
                </div>
                <div className="bottom">
                    <div className="btn overlay round btn-more">
                        tải thêm
                    </div>
                </div>
            </div>
        </section>
    )
}