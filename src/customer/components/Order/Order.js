import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Grid from "@mui/material/Grid";
import OrderCard from "./OrderCard";
import { useNavigate } from "react-router-dom";
function Order() {
    const navigate = useNavigate();
    const orderStatus = [
        { label: 'On The Way', value: 'on_the_way' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Returned', value: 'returned' },
    ];
    return (_jsx("div", { onClick: () => { navigate(`/account/order/${5}`); }, className: "px-5 lg:px-20", children: _jsxs(Grid, { container: true, sx: { justifyContent: 'space-between' }, children: [_jsx(Grid, { item: true, xs: 2.5, children: _jsxs("div", { className: "h-auto shadow-lg bg-white p-5 sticky top-5", children: [_jsx("h1", { className: "font-bold text-lg", children: " Filter" }), _jsxs("div", { className: "space-y-4 mt-10", children: [_jsx("h1", { className: "font-semibold", children: "ORDER STATUS" }), orderStatus.map((option) => _jsx(_Fragment, { children: _jsxs("div", { className: "flex items-center", children: [_jsx("input", { className: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500", type: "checkbox" }), _jsx("label", { className: "ml-3 text-sm text-gray-600", htmlFor: option.value, children: option.label })] }) }))] })] }) }), _jsx(Grid, { item: true, xs: 9, children: _jsx("div", { className: "space-y-5", children: [1, 1, 1, 1, 1].map(() => _jsx(OrderCard, {})) }) })] }) }));
}
export default Order;
