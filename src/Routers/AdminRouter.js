import { jsx as _jsx } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/components/Admin";
function AdminRouters() {
    return (_jsx(Routes, { children: _jsx(Route, { path: '/*', element: _jsx(Admin, {}) }) }));
}
export default AdminRouters;
