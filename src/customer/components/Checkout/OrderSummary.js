import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "@mui/material/Button";
import CartItem from "../../Cart/CartItem";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getOrderById } from '../../../State/Order/Action.js';
import { createPayment } from '../../../State/Payment/Action.js';
function OrderSummary() {
    var _a, _b, _c, _d, _e, _f;
    const dispatch = useDispatch();
    const { order } = useSelector((store) => store);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id");
    useEffect(() => {
        dispatch(getOrderById(orderId));
    }, []);
    const handleCheckout = () => {
        var _a;
        const data = {
            "quantity": 1,
            "amount": ((_a = order === null || order === void 0 ? void 0 : order.orders) === null || _a === void 0 ? void 0 : _a.totalDiscountedPrice) * 100,
            "currency": "USD",
            "name": "books"
        };
        dispatch(createPayment(orderId, data));
    };
    return (_jsxs("div", { children: [_jsx("div", { className: "p-5 rounded-s-md border", children: _jsx(AddressCard, { address: (_a = order === null || order === void 0 ? void 0 : order.orders) === null || _a === void 0 ? void 0 : _a.shippingAddress }) }), _jsx("div", { children: _jsxs("div", { className: "lg:grid py-2 grid-cols-3 relative", children: [_jsx("div", { className: "col-span-2", children: (_c = (_b = order === null || order === void 0 ? void 0 : order.orders) === null || _b === void 0 ? void 0 : _b.orderItem) === null || _c === void 0 ? void 0 : _c.map((item) => _jsx(CartItem, { item: item, summary: true })) }), _jsxs("div", { className: "px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0", children: [_jsxs("div", { className: "border mb-4", children: [_jsx("p", { className: "uppercase font-bold opacity-60 py-4 px-2", children: "Price Details" }), _jsx("hr", {}), _jsxs("div", { className: "span-y-3 font-semi-bold mb-6", children: [_jsxs("div", { className: "flex justify-between pt-3 px-2 text-black ", children: [_jsx("span", { children: "Price" }), _jsxs("span", { children: ["$", (_d = order === null || order === void 0 ? void 0 : order.orders) === null || _d === void 0 ? void 0 : _d.totalPrice] })] }), _jsxs("div", { className: "flex justify-between pt-3 px-2 text-black ", children: [_jsx("span", { children: "Discount" }), _jsxs("span", { className: " text-green-600", children: ["$", (_e = order === null || order === void 0 ? void 0 : order.orders) === null || _e === void 0 ? void 0 : _e.discounte] })] }), _jsxs("div", { className: "flex justify-between pt-3 px-2 text-black ", children: [_jsx("span", { children: "Delivery Charge" }), _jsx("span", { className: " text-green-600", children: "Free" })] }), _jsx("hr", {}), _jsxs("div", { className: "flex justify-between pt-2 px-2 text-black ", children: [_jsx("span", { children: "Total Amount" }), _jsxs("span", { className: " text-green-600", children: ["$", (_f = order === null || order === void 0 ? void 0 : order.orders) === null || _f === void 0 ? void 0 : _f.totalDiscountedPrice] })] })] })] }), _jsx(Button, { variant: 'contained', onClick: handleCheckout, className: "w-full", sx: { px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }, children: "Checkout" })] })] }) })] }));
}
export default OrderSummary;
