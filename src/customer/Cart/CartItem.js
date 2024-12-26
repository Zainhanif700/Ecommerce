import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { removeItemToCart } from '../../State/Cart/Action.js';
const CartItem = ({ item, updateCart, setUpdateCart, summary = false }) => {
    var _a, _b, _c, _d, _e, _f;
    const dispatch = useDispatch();
    const handleUpdateCartItem = () => {
        window.alert("Currently Updating The Quantity of Cart Is Not Allowed");
    };
    const handleRemoveCartItem = () => {
        dispatch(removeItemToCart(item.id));
        setUpdateCart(!updateCart);
    };
    return (_jsxs("div", { className: "p-5 shadow-lg border rounded-md", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]", children: _jsx("img", { className: "w-full h-full object-cover object-top", src: (_a = item === null || item === void 0 ? void 0 : item.product) === null || _a === void 0 ? void 0 : _a.imageUrl, alt: "" }) }), _jsxs("div", { className: "ml-5 space-y-1", children: [_jsx("p", { className: "font-semibold", children: (_b = item === null || item === void 0 ? void 0 : item.product) === null || _b === void 0 ? void 0 : _b.title }), _jsxs("p", { className: "opacity-70", children: ["Size: ", (item === null || item === void 0 ? void 0 : item.size) ? item === null || item === void 0 ? void 0 : item.size : 'M', ", ", (_c = item === null || item === void 0 ? void 0 : item.product) === null || _c === void 0 ? void 0 : _c.color] }), _jsxs("p", { className: "opacity-70 mt-2", children: ["Seller: ", (_e = (_d = item === null || item === void 0 ? void 0 : item.product) === null || _d === void 0 ? void 0 : _d.brand) !== null && _e !== void 0 ? _e : '---'] }), _jsxs("div", { className: "mt-4 lg:row-span-3 lg:mt-0", children: [_jsx("h2", { className: "sr-only", children: "Product information" }), _jsxs("div", { className: 'flex space-x-5 items-center text-lg text-gray-900 pt-6', children: [_jsxs("p", { className: 'font-semibold', children: ["$", item === null || item === void 0 ? void 0 : item.price] }), _jsx("p", { className: 'opacity-50 line-through', children: item === null || item === void 0 ? void 0 : item.discountedPrice }), _jsxs("p", { className: 'text-green-600 font-semibold', children: [(_f = item === null || item === void 0 ? void 0 : item.product) === null || _f === void 0 ? void 0 : _f.discountedPersent, "% Off"] })] })] })] })] }), !summary &&
                _jsxs("div", { className: "flex items-center lg:space-x-10 pt-4", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(IconButton, { onClick: () => handleUpdateCartItem(), disabled: (item === null || item === void 0 ? void 0 : item.quantity) <= 1, children: _jsx(RemoveCircleOutlineIcon, {}) }), _jsx("span", { className: "py-1 px-7 border rounded-sm", children: item === null || item === void 0 ? void 0 : item.quantity }), _jsx(IconButton, { sx: { color: 'RGB(145 85 253)' }, onClick: () => handleUpdateCartItem(), children: _jsx(AddCircleOutlineIcon, {}) })] }), _jsx("div", { children: _jsx(Button, { sx: { color: 'RGB(145 85 253)' }, onClick: handleRemoveCartItem, children: "remove" }) })] })] }));
};
export default CartItem;
