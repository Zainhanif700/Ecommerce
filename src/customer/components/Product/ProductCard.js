import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* Css */
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsxs("div", { onClick: () => navigate(`/product/${product.id}`), className: 'productCard w-[15rem] m-3 transition-all cursor-pointer', children: [_jsx("div", { className: 'h-[20rem]', children: _jsx("img", { className: 'h-full w-full object-cover object-left-top', src: product.imageUrl, alt: "" }) }), _jsxs("div", { className: 'textPart bg-white p-3', children: [_jsxs("div", { children: [_jsx("p", { className: 'font-bold opacity-60', children: product.brand }), _jsx("p", { className: '', children: product.title })] }), _jsxs("div", { className: 'flex items-center space-x-2', children: [_jsx("p", { className: 'font-semibold', children: product.discountedPrice }), _jsx("p", { className: 'line-through opacity-50', children: product.price }), _jsxs("p", { className: 'text-green-600 font-semibold', children: [product.discountedPersent, "% off"] })] })] })] }) }));
};
export default ProductCard;
