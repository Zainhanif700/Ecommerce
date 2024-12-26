import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, CssBaseline, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from "./CreateProductForm";
import ProductTable from "./ProductTable";
import OrdersTable from "./OrdersTable";
import CustomerTables from "./CustomerTables";
import AdminDashboard from "./AdminDashboard";
const menu = [
    { name: 'Dashboard', path: '/admin', icon: _jsx(DashboardIcon, {}) },
    { name: 'Products', path: '/admin/products', icon: _jsx(DashboardIcon, {}) },
    { name: 'Customers', path: '/admin/customers', icon: _jsx(DashboardIcon, {}) },
    { name: 'Orders', path: '/admin/orders', icon: _jsx(DashboardIcon, {}) },
    { name: 'AddProduct', path: '/admin/product/create', icon: _jsx(DashboardIcon, {}) },
];
function Admin() {
    const navigate = useNavigate();
    const drawer = (_jsxs(Box, { sx: { overflow: 'auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }, children: [_jsx(List, { children: menu.map((item) => _jsx(ListItem, { disablePadding: true, onClick: () => navigate(item.path), children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: item.icon }), _jsx(ListItemText, { children: item.name })] }) }, item.name)) }), _jsx(List, { children: _jsx(ListItem, { disablePadding: true, children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: _jsx(AccountCircleIcon, {}) }), _jsx(ListItemText, { children: "Account" })] }) }) })] }));
    return (_jsx("div", { children: _jsxs("div", { className: "flex h-screen ", children: [_jsx(CssBaseline, {}), _jsx("div", { className: "shadow-lg shadow-gray-600 w-[15%] h-full fixed top-0 border-r-gray-300 border", children: drawer }), _jsx("div", { className: "w-[85%] ml-[15%]", children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(AdminDashboard, {}) }), _jsx(Route, { path: '/product/create', element: _jsx(CreateProductForm, {}) }), _jsx(Route, { path: '/products', element: _jsx(ProductTable, {}) }), _jsx(Route, { path: '/orders', element: _jsx(OrdersTable, {}) }), _jsx(Route, { path: '/customers', element: _jsx(CustomerTables, {}) })] }) })] }) }));
}
export default Admin;
