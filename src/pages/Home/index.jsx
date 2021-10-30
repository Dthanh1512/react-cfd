import Banner from "./components/Banner"
import Course from "./components/Course";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Action from "./components/Action";
import { useEffect } from "react";
import homeApi from "../../services/courseServices";

export default function Home() {

    useEffect(async () => {
        let res = await homeApi
    }, [])
    return (<main className="homepage" id="main">
        <Banner />
        <Course />
        <Different />
        <Testimonial />
        <Gallery />
        <Action />
    </main>
    );
}