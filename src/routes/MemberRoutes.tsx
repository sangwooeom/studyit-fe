import MemberDetail from "../pages/member/Detail"
import MemberList from "../pages/member/List"

const MemberRoutes = [
    {
        path: '/member/detail',
        element: <MemberDetail />,
        name: '멤버 찾기 상세 페이지'
    },
    {
        path: '/member/list',
        element: <MemberList />,
        name: '멤버 찾기 목록 페이지'
    }
]

export default MemberRoutes;