import Login from "../pages/auth/Login"
import Result from "../pages/auth/join/Result"
import Input from "../pages/auth/join/Input";
import Selector from "../pages/auth/join/Selector";
import Finder from "../pages/auth/password/Finder";
import Resetting from "../pages/auth/password/Resetting";

const AuthRoutes = [
    {
        path: "/auth/login",
        element: <Login />
    },
    {
        path: "/auth/join/result",
        element: <Result />
    },
    {
        path: "/auth/join/input",
        element: <Input />
    },
    {
        path: "/auth/join/selector",
        element: <Selector />
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