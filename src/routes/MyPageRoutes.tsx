import MyPageInfoEdit from "../pages/mypage/info/Edit";
import MyPageInfoPassword from "../pages/mypage/info/Password";
import MyPageProfileEdit from "../pages/mypage/profile/Edit";
import MyPageProfileDetail from "../pages/mypage/profile/Detail";
import BookMark from "../pages/mypage/Bookmark";
import MyStudy from "../pages/mypage/MyStduy";

const MyPageRoutes = [
    {
        path: "/mypage/info/edit",
        element: <MyPageInfoEdit />,
        name: "마이페이지 - 기본 정보"
    },
    {
        path: "/mypage/info/password",
        element: <MyPageInfoPassword />,
        name: "마이페이지 - 비밀번호 변경"
    },
    {
        path: "/mypage/profile/edit",
        element: <MyPageProfileEdit />,
        name: "마이페이지 - 프로필 편집"
    },
    {
        path: "/mypage/profile/detail",
        element: <MyPageProfileDetail />,
        name: "마이페이지 - 프로필 상세 페이지"
    },
    {
        path: "/mypage/bookmark",
        element: <BookMark />,
        name: "마이페이지 - 북마크",
    },
    {
        path: "/mypage/mystudy",
        element: <MyStudy />,
        name: "마이페이지 - 스터디 활동"
    }
];

export default MyPageRoutes;