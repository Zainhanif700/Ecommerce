import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid } from '@mui/material';
import Achivement from './Achivement';
import MonthlyOverview from './MonthlyOverview';
import OrdersTableView from '../view/OrdersTableView';
import ProductTableView from '../view/ProductTableView';
const AdminDashboard = () => {
    return (_jsx("div", { className: 'p-10', children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, md: 4, children: _jsx("div", { className: 'shadow-lg shadow-gray-600', children: _jsx(Achivement, {}) }) }), _jsx(Grid, { item: true, xs: 12, md: 8, children: _jsx("div", { className: 'shadow-lg shadow-gray-600', children: _jsx(MonthlyOverview, {}) }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx("div", { className: 'shadow-lg shadow-gray-600', children: _jsx(OrdersTableView, {}) }) }), _jsx(Grid, { item: true, xs: 12, md: 6, children: _jsx("div", { className: 'shadow-lg shadow-gray-600', children: _jsx(ProductTableView, {}) }) })] }) }));
};
export default AdminDashboard;
