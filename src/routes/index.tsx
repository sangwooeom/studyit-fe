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
        element: <Index />
    },
    {
        path: "/main",
        element: <Main />
    },
    ...AuthRoutes,
    ...MemberRoutes,
    ...MyPageRoutes,
    ...StudyRoutes
]

export default routes;

export const router = createBrowserRouter(routes);