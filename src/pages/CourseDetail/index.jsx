import Banner from "./components/Banner";
import Info from "./components/Info";
import CourseList from "../../components/CourseList";

export default function CourseDetail() {
    var list = [
        {
            name: "Front-end Căn Bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            name: "Front-end nâng cao",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            name: "Laravel framework",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
    ]
    return (
        <main class="course-detail" id="main">
            <Banner />
            <Info />
            <CourseList
                name="Dự án THÀNH VIÊN"
                list={list}
            />
            <CourseList
                name="Khoá học LIÊN QUAN"
                list={list}
            />
        </main>
    )
}