import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main";
import AuthRoutes from "./AuthRoutes";
import MemberRoutes from "./MemberRoutes";
import MyPageRoutes from "./MyPageRoutes";
import StudyRoutes from "./StudyRoutes";
import App from "../App";

const routes = [
    {
        path: "/",
        element: <App />,
        name: '메인 페이지',
        children: [
            {
                path: "/",
                element: <Main />,
                name: '메인 페이지'
            },
            ...AuthRoutes,
            ...MemberRoutes,
            ...MyPageRoutes,
            ...StudyRoutes
        ]
    },
]

export default routes;

export const router = createBrowserRouter(routes);