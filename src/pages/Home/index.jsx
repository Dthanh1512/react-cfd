import Banner from "./components/Banner"
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Action from "./components/Action";
import { useEffect } from "react";
import homeApi from "../../services/courseServices";
import { useState } from "react/cjs/react.development";
import Loading from "../../components/Loading";
import CourseList from "../../components/CourseList";

export default function Home() {
    let [loading, setLoading] = useState(true);
    let [data, setData] = useState();

    useEffect(async () => {
        let data = await homeApi.home()
        setData(data)
        setLoading(false)
    }, [])
    if (loading) return <Loading />
    return (<main className="homepage" id="main">
        <Banner />
        <CourseList
            title="KHÓA HỌC CFD"
            description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    has a more-or-less normal"
            name="Khóa học ONLINE"
            list={data.online}
        />
        <CourseList
            name="Khóa học OFFLINE"
            list={data.offline}
        />
        <Different />
        <Testimonial review={data.review} />
        <Gallery gallery={data.gallery} />
        <Action />
    </main>
    );
}
