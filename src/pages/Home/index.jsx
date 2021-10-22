import Banner from "./components/Banner"
import Course from "./components/Course";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Action from "./components/Action";

export default function Home() {
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