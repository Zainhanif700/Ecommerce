import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Button from "@mui/material/Button";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart } from '../../State/Cart/Action.js';
const Cart = () => {
    var _a, _b;
    const [updateCart, setUpdateCart] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector((store) => store);
    const handleCheckout = () => {
        navigate('/checkout?step=2');
    };
    useEffect(() => {
        dispatch(getCart());
    }, [updateCart]);
    return (_jsx(_Fragment, { children: ((_b = (_a = cart === null || cart === void 0 ? void 0 : cart.cart) === null || _a === void 0 ? void 0 : _a.cartItems) === null || _b === void 0 ? void 0 : _b.length) > 0 ? (_jsx("div", { children: _jsxs("div", { className: "lg:grid grid-cols-3 lg:px-16 relative", children: [_jsx("div", { className: "col-span-2", children: cart.cart.cartItems.map((item) => (_jsx(CartItem, { item: item, updateCart: updateCart, setUpdateCart: setUpdateCart }, item.id))) }), _jsxs("div", { className: "px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0", children: [_jsxs("div", { className: "border mb-4", children: [_jsx("p", { className: "uppercase font-bold opacity-60 py-4 px-2", children: "Price Details" }), _jsx("hr", {}), _jsxs("div", { className: "span-y-3 font-semi-bold mb-6", children: [_jsxs("div", { className: "flex justify-between pt-3 px-2 text-black", children: [_jsx("span", { children: "Price" }), _jsxs("span", { children: ["$", cart.cart.totalPrice] })] }), _jsxs("div", { className: "flex justify-between pt-3 px-2 text-black", children: [_jsx("span", { children: "Discount" }), _jsxs("span", { className: "text-green-600", children: ["-$", cart.cart.discount || 0] })] }), _jsxs("div", { className: "flex justify-between pt-3 px-2 text-black", children: [_jsx("span", { children: "Delivery Charge" }), _jsx("span", { className: "text-green-600", children: "Free" })] }), _jsx("hr", {}), _jsxs("div", { className: "flex justify-between pt-2 px-2 text-black", children: [_jsx("span", { children: "Total Amount" }), _jsxs("span", { className: "text-green-600", children: ["$", cart.cart.totalDiscountedPrice] })] })] })] }), _jsx(Button, { variant: "contained", onClick: handleCheckout, className: "w-full", sx: {
                                    px: '2.5rem',
                                    py: '.7rem',
                                    bgcolor: '#9155fd',
                                }, children: "Checkout" })] })] }) })) : (_jsx("div", { className: "flex justify-center items-center text-xl ", children: "No Items In The Cart" })) }));
};
export default Cart;
