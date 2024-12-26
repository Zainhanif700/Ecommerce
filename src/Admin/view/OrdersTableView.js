import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Avatar, AvatarGroup, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../State/Admin/Order/Action.js';
function OrdersTableView() {
    var _a, _b, _c;
    const dispatch = useDispatch();
    const { adminOrder } = useSelector((state) => state);
    useEffect(() => {
        dispatch(getOrders());
    }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrders]);
    return (_jsx("div", { children: _jsxs(Card, { className: 'mt-2 w-[100%]', children: [_jsx(CardHeader, { title: 'Recent Orders' }), _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { "aria-label": "simple table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Image" }), _jsx(TableCell, { align: "left", children: "Title" }), _jsx(TableCell, { align: "left", children: "Id" }), _jsx(TableCell, { align: "left", children: "Price" }), _jsx(TableCell, { align: "left", children: "Status" })] }) }), _jsx(TableBody, { children: ((_a = adminOrder === null || adminOrder === void 0 ? void 0 : adminOrder.orders) === null || _a === void 0 ? void 0 : _a.length) > 0 && ((_c = (_b = adminOrder === null || adminOrder === void 0 ? void 0 : adminOrder.orders) === null || _b === void 0 ? void 0 : _b.slice(0, 5)) === null || _c === void 0 ? void 0 : _c.map((row, index) => (_jsxs(TableRow, { sx: { '&:last-child td, &:last-child th': { border: 0 } }, children: [_jsx(TableCell, { align: "left", children: _jsx(AvatarGroup, { max: 2, sx: { justifyContent: 'start' }, children: row === null || row === void 0 ? void 0 : row.orderItem.map((item) => _jsx(Avatar, { src: `${item.product.imageUrl}` })) }) }), _jsx(TableCell, { align: "left", scope: "row", children: row === null || row === void 0 ? void 0 : row.orderItem.map((item) => { var _a; return _jsx("p", { children: `${(_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.title}` }); }) }), _jsx(TableCell, { align: "left", children: row === null || row === void 0 ? void 0 : row.id }), _jsx(TableCell, { align: "left", children: row === null || row === void 0 ? void 0 : row.totalPrice }), _jsx(TableCell, { align: "left", children: _jsx("span", { className: `text-white px-5 rounded-full py-2 ${row.orderStatus == "CONFIRMED" ? "bg-[#369236]" : row.orderStatus == "SHIPPED" ? "bg-[#4141ff]" : row.orderStatus == "PLACED" ? "bg-[#02B290]" : row.orderStatus == "PENDING" ? "bg-[gray]" : "bg-[#025720]"}`, children: row === null || row === void 0 ? void 0 : row.orderStatus }) })] }, row === null || row === void 0 ? void 0 : row.id)))) })] }) })] }) }));
}
export default OrdersTableView;
