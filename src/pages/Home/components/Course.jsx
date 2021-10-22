import CourseList from "../../../components/CourseList";

export default function Course() {
    var list = [
        {
            name: "Front-end Căn Bản",
            teacher: "Trần Nghĩa",
            status: "Đã kết thúc",
            description: "One of the best corporate fashion brands in Sydney",
            like: "100",
            person: "12",

        },
        {
            name: "Front-end Căn Bản",
            teacher: "Trần Nghĩa",
            status: "Đang diễn ra",
            description: "One of the best corporate fashion brands in Sydney",
            like: "100",
            person: "12",
        },
        {
            name: "Front-end Căn Bản",
            teacher: "Trần Nghĩa",
            status: "Sắp khai giảng",
            description: "One of the best corporate fashion brands in Sydney",
            like: "100",
            person: "12",
        },
        {
            name: "Front-end Căn Bản",
            teacher: "Trần Nghĩa",
            status: "Đang diễn ra",
            description: "One of the best corporate fashion brands in Sydney",
            like: "100",
            person: "12",
        },
        {
            name: "Front-end Căn Bản",
            teacher: "Trần Nghĩa",
            status: "Đã kết thúc",
            description: "One of the best corporate fashion brands in Sydney",
            like: "100",
            person: "12",
        },
        {
            name: "Front-end Căn Bản",
            teacher: "Trần Nghĩa",
            status: "Đang diễn ra",
            description: "One of the best corporate fashion brands in Sydney",
            like: "100",
            person: "12",
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