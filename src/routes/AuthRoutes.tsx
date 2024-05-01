import Login from "../pages/auth/Login"
import Result from "../pages/auth/join/Result"
import Input from "../pages/auth/join/Input";
import Selector from "../pages/auth/join/Selector";
import Finder from "../pages/auth/password/Finder";
import Resetting from "../pages/auth/password/Resetting";

const AuthRoutes = [
    {
        path: "/auth/login",
        element: <Login />,
        name: "로그인 페이지"
    },
    {
        path: "/auth/join/result",
        element: <Result />,
        name: "회원가입 후 이메일 알림 페이지"
    },
    {
        path: "/auth/join/input",
        element: <Input />,
        name: "회원가입 정보 입력 페이지"
    },
    {
        path: "/auth/join/selector",
        element: <Selector />,
        name: "회원가입 방식 선택 페이지"
    },
    {
        path: "/auth/password/finder",
        element: <Finder />,
        name: "비밀번호 분실 - 비밀번호 찾기 페이지"
    },
    {
        path: "/auth/password/resetting",
        element: <Resetting />,
        name: "비밀번호 분실 - 비밀번호 재설정"
    }
]

export default AuthRoutes;