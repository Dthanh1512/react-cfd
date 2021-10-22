import List from "./components/List";

export default function Project() {
    var list = [
        {
            name: "furnitown",
            person: "Trần Nghĩa"
        },
        {
            name: "kymco",
            person: "Huỳnh Tiến Tài"
        },
        {
            name: "gboxmb",
            person: "Nguyễn Văn Tuấn"
        },
        {
            name: "wooder",
            person: "Nguyễn Đức Huy"
        },
        {
            name: "gboxmb",
            person: "Nguyễn Văn Tuấn"
        },
        {
            name: "wooder",
            person: "Nguyễn Đức Huy"
        },
        {
            name: "gboxmb",
            person: "Nguyễn Văn Tuấn"
        },
        {
            name: "wooder",
            person: "Nguyễn Đức Huy"
        },
    ]
    return (
        <main class="projectpage" id="main">
            <List
                description="Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem"
                list={list}
            />
        </main>
    )
}