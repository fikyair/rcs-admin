import LimitManager from "../pages/limit/LimitManager";
import Login from "../pages/login/Login";

export const root = [
{
    path: '/',
        exact: true,
    component: (props) => BundleCom(props, LimitManager),
}, {
    path: '/login',
        exact: true,
        component: (props) => BundleCom(props, Login),
}, {
    path: '/login/:id',
        exact: true,
        component: (props) => BundleCom(props, Login),
}, ]