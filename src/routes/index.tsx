import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Index from "../pages/Index";
import AuthRoutes from "./AuthRoutes";
import MemberRoutes from "./MemberRoutes";
import MyPageRoutes from "./MyPageRoutes";
import StudyRoutes from "./StudyRoutes";

const routes = [
    {
        path: "/",
        element: <Index />,
        name: '색인 페이지',
    },
    {
        path: "/main",
        element: <Main />,
        name: '메인 페이지'
    },
    ...AuthRoutes,
    ...MemberRoutes,
    ...MyPageRoutes,
    ...StudyRoutes
]

export default routes;

export const router = createBrowserRouter(routes);