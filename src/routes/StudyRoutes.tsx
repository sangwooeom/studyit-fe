import StduyCreation from "../pages/study/Creation";
import StudyDetail from "../pages/study/Detail";
import StudyList from "../pages/study/List";

const StudyRoutes = [
    {
        path: "/study/creation",
        element: <StduyCreation />,
        name: "스터디 생성 페이지",
    },
    {
        path: "/study/detail",
        element: <StudyDetail />,
        name: "스터디 상세 페이지"
    },
    {
        path: "/study/list",
        element: <StudyList />,
        name: "스터디 목록 페이지"
    }
];

export default StudyRoutes;