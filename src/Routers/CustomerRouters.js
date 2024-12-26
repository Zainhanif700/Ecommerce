import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage";
import Cart from "../customer/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";
function CustomerRouters() {
    return (_jsxs("div", { children: [_jsx("div", { children: _jsx(Navigation, {}) }), _jsxs(Routes, { children: [_jsx(Route, { path: '/login', element: _jsx(HomePage, {}) }), _jsx(Route, { path: '/register', element: _jsx(HomePage, {}) }), _jsx(Route, { path: '/', element: _jsx(HomePage, {}) }), _jsx(Route, { path: '/:levelOne/:levelTwo/:levelThree/', element: _jsx(Product, {}) }), _jsx(Route, { path: '/product/:productId', element: _jsx(ProductDetails, {}) }), _jsx(Route, { path: '/cart', element: _jsx(Cart, {}) }), _jsx(Route, { path: '/checkout', element: _jsx(Checkout, {}) }), _jsx(Route, { path: '/account/order', element: _jsx(Order, {}) }), _jsx(Route, { path: '/account/order/:orderID', element: _jsx(OrderDetails, {}) }), _jsx(Route, { path: '/payment/:orderId', element: _jsx(PaymentSuccess, {}) })] }), _jsx("div", { className: "pt-10", children: _jsx(Footer, {}) })] }));
}
export default CustomerRouters;
