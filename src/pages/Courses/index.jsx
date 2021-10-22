import CourseList from "../../components/CourseList";

export default function Courses() {
    var list = [
        {
            name: "Front-end căn bản",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            name: "React JS",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Vương Đặng"
        },
        {
            name: "Animation",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            name: "Scss, Grunt JS và Boostrap 4",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            name: "UX/UI Design",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
        {
            name: "Web Responsive",
            description: "One of the best corporate fashion brands in Sydney",
            teacher: "Trần Nghĩa"
        },
    ]
    return (
        <main class="homepage" id="main">
            <CourseList
                title="KHÓA HỌC CFD"
                description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    has a more-or-less normal"
                name="Khóa học ONLINE"
                list={list}
            />
            <CourseList
                name="Khóa học OFFLINE"
                list={list}
            />
        </main>
    )
}