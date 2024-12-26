import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
const HomeSectionCard = ({ product, keys }) => {
    const navigate = useNavigate();
    return (_jsx(_Fragment, { children: _jsx("div", { onClick: () => { navigate(`/product/${keys}`); console.log(keys); }, className: 'productCard w-[15rem] m-3 transition-all cursor-pointer', children: _jsxs("div", { className: "cursor-pointer m-2 border flex flex-col bg-white rounded-lg shadow-lg overflow-hidden items-center w-[15rem]", children: [_jsx("div", { className: "h-[13rem] w-[10rem]", children: _jsx("img", { className: "object-cover object-top w-full h-full", src: product === null || product === void 0 ? void 0 : product.imageUrl, alt: "" }) }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "text-lg px-4 font-medium text-gray-900", children: product === null || product === void 0 ? void 0 : product.brand }), _jsx("p", { className: "mt-2 text-sm text-gray-500", children: product === null || product === void 0 ? void 0 : product.title })] })] }) }) }));
};
export default HomeSectionCard;
