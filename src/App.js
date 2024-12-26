import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
/* Component */
import CustomerRouters from "./Routers/CustomerRouters";
import AdminRouters from "./Routers/AdminRouter";
function App() {
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/*', element: _jsx(CustomerRouters, {}) }), _jsx(Route, { path: '/admin/*', element: _jsx(AdminRouters, {}) })] }) }) }));
}
export default App;
