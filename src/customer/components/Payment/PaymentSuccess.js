import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action.js';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker';
import AddressCard from '../AddressCard/AddressCard';
const PaymentSuccess = () => {
    var _a, _b;
    const [paymentId, setPaymentId] = useState(null);
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const { order } = useSelector((store) => store);
    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get('paymentId'));
    }, []);
    useEffect(() => {
        dispatch(getOrderById(orderId));
    }, [orderId, paymentId]);
    return (_jsxs("div", { className: 'px-2 lg:px-36', children: [_jsx("div", { className: 'flex flex-col justify-center items-center', children: _jsxs(Alert, { variant: 'filled', severity: 'success', sx: { mb: 6, width: 'fit-content' }, children: [_jsx(AlertTitle, { children: "Payment Success" }), "Congratulations Your Order Get Placed"] }) }), _jsx(OrderTracker, { activeStep: 1, label: undefined }), _jsx(Grid, { container: true, className: 'space-y-5 py-5 pt-20', children: (_b = (_a = order.orders) === null || _a === void 0 ? void 0 : _a.orderItem) === null || _b === void 0 ? void 0 : _b.map((item) => {
                    var _a, _b, _c, _d;
                    return _jsxs(Grid, { container: true, item: true, className: 'shadow-xl rounded-md p-5', sx: { alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Grid, { item: true, xs: 6, children: _jsxs("div", { className: 'flex items-center', children: [_jsx("img", { className: 'w-[5rem] object-cover object-top h-[5rem]', src: item.product.imageUrl, alt: "" }), _jsxs("div", { className: 'ml-5 space-y-2', children: [_jsx("p", { children: item.product.title }), _jsxs("div", { className: 'opacity-50 text-xs font-semibold space-x-5', children: [_jsxs("span", { children: ["Color: ", (_a = item.color) !== null && _a !== void 0 ? _a : 'Black'] }), _jsxs("span", { children: ["Size: ", item.size] })] }), _jsxs("p", { children: ["Seller: ", (_c = (_b = item === null || item === void 0 ? void 0 : item.product) === null || _b === void 0 ? void 0 : _b.brand) !== null && _c !== void 0 ? _c : 'xxxx'] }), _jsxs("p", { children: ["$", item.price - item.discountedPrice] })] })] }) }), _jsx(Grid, { item: true, children: _jsx(AddressCard, { address: (_d = order.orders) === null || _d === void 0 ? void 0 : _d.shippingAddress }) })] });
                }) })] }));
};
export default PaymentSuccess;
