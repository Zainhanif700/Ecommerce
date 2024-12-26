import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, shipOrder, confirmOrder, deliveredOrder, deleteOrder } from '../../State/Admin/Order/Action.js';
function OrdersTable() {
    var _a, _b, _c;
    const dispatch = useDispatch();
    const { adminOrder } = useSelector((store) => store);
    const [anchorEl, setAnchorEl] = useState(Array((_a = adminOrder === null || adminOrder === void 0 ? void 0 : adminOrder.orders) === null || _a === void 0 ? void 0 : _a.length).fill(null));
    useEffect(() => {
        dispatch(getOrders());
    }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrders]);
    const handleClick = (event, index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = event.currentTarget;
        setAnchorEl(newAnchorElArray);
    };
    const handleClose = (index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = null;
        setAnchorEl(newAnchorElArray);
    };
    const handleShippedOrder = (orderId, index) => {
        dispatch(shipOrder(orderId));
        handleClose(index);
    };
    const handleConfimedOrder = (orderId, index) => {
        dispatch(confirmOrder(orderId));
        handleClose(index);
    };
    const handleDeliveredOrder = (orderId, index) => {
        dispatch(deliveredOrder(orderId));
        handleClose(index);
    };
    const handleDeleteOrder = (orderId) => {
        dispatch(deleteOrder(orderId));
    };
    return (_jsx("div", { className: 'p-10', children: _jsxs(Card, { className: 'mt-2 w-[100%]', children: [_jsx(CardHeader, { title: 'All Products' }), _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { "aria-label": "simple table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Image" }), _jsx(TableCell, { align: "left", children: "Title" }), _jsx(TableCell, { align: "left", children: "Id" }), _jsx(TableCell, { align: "left", children: "Price" }), _jsx(TableCell, { align: "left", children: "Status" }), _jsx(TableCell, { align: "left", children: "Update" }), _jsx(TableCell, { align: "left", children: "Delete" })] }) }), _jsx(TableBody, { children: ((_b = adminOrder === null || adminOrder === void 0 ? void 0 : adminOrder.orders) === null || _b === void 0 ? void 0 : _b.length) > 0 && ((_c = adminOrder === null || adminOrder === void 0 ? void 0 : adminOrder.orders) === null || _c === void 0 ? void 0 : _c.map((row, index) => (_jsxs(TableRow, { sx: { '&:last-child td, &:last-child th': { border: 0 } }, children: [_jsx(TableCell, { align: "left", children: _jsx(AvatarGroup, { max: 2, sx: { justifyContent: 'start' }, children: row === null || row === void 0 ? void 0 : row.orderItem.map((item) => _jsx(Avatar, { src: `${item.product.imageUrl}` })) }) }), _jsx(TableCell, { align: "left", scope: "row", children: row === null || row === void 0 ? void 0 : row.orderItem.map((item) => { var _a; return _jsx("p", { children: `${(_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.title}` }); }) }), _jsx(TableCell, { align: "left", children: row === null || row === void 0 ? void 0 : row.id }), _jsx(TableCell, { align: "left", children: row === null || row === void 0 ? void 0 : row.totalPrice }), _jsx(TableCell, { align: "left", children: _jsx("span", { className: `text-white px-5 rounded-full py-2 ${row.orderStatus == "CONFIRMED" ? "bg-[#369236]" : row.orderStatus == "SHIPPED" ? "bg-[#4141ff]" : row.orderStatus == "PLACED" ? "bg-[#02B290]" : row.orderStatus == "PENDING" ? "bg-[gray]" : "bg-[#025720]"}`, children: row === null || row === void 0 ? void 0 : row.orderStatus }) }), _jsx(TableCell, { align: "left", children: _jsxs("div", { children: [_jsx(Button, { id: "basic-button", "aria-haspopup": "true", onClick: (e) => handleClick(e, index), "aria-controls": `basic-menu-${row.id}`, "aria-expanded": Boolean(anchorEl === null || anchorEl === void 0 ? void 0 : anchorEl[index]), children: "Status" }), _jsxs(Menu, { id: `basic-menu-${row.id}`, anchorEl: anchorEl[index], open: Boolean(anchorEl[index]), onClose: () => handleClose(index), MenuListProps: {
                                                            'aria-labelledby': 'basic-button',
                                                        }, children: [_jsx(MenuItem, { onClick: () => handleConfimedOrder(row.id, index), children: "Confirmed Order" }), _jsx(MenuItem, { onClick: () => handleShippedOrder(row.id, index), children: "Shipped Order" }), _jsx(MenuItem, { onClick: () => handleDeliveredOrder(row.id, index), children: "Delivered Order" })] })] }) }), _jsx(TableCell, { align: "left", children: _jsx(Button, { variant: 'outlined', onClick: () => handleDeleteOrder(row.id), children: "Delete" }) })] }, row === null || row === void 0 ? void 0 : row.id)))) })] }) })] }) }));
}
export default OrdersTable;
