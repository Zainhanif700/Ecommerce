import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarIcon from '@mui/icons-material/Star';
function OrderDetails() {
    return (_jsxs("div", { className: "lg:px-20 px-5", children: [_jsxs("div", { children: [_jsx("h1", { className: "font-bold text-xl py-7", children: "Delivery Address" }), _jsx(AddressCard, { address: null })] }), _jsx("div", { className: "py-20", children: _jsx(OrderTracker, { activeStep: 3, label: 'Order Shipped' }) }), _jsx(Grid, { className: 'space-y-5 ', container: true, children: [1, 1, 1, 1, 1].map(() => _jsxs(Grid, { item: true, container: true, className: "shadow-xl rounded-md p-5 border", sx: { alignItems: 'center', justifyContent: 'space-between' }, children: [_jsx(Grid, { item: true, xs: 6, children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("img", { className: "w-[5rem] h-[rem] object-cover object-top", src: "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70", alt: "" }), _jsxs("div", { className: "space-y-2 ml-5", children: [_jsx("p", { className: "font-semibold", children: "Title Title Title " }), _jsxs("p", { className: "opacity-50 text-xs font-semibold space-x-5", children: [_jsx("span", { children: "Color : Pink" }), _jsx("span", { children: "Size : M" })] }), _jsx("p", { children: "Seller : " }), _jsx("p", { children: "$199" })] })] }) }), _jsx(Grid, { item: true, children: _jsxs(Box, { sx: { color: 'deeppink[500]' }, children: [_jsx(StarIcon, { sx: { fontSize: '2rem' }, className: "px-2 text-2xl" }), _jsx("span", { children: "Rae & Review Product" })] }) })] })) })] }));
}
export default OrderDetails;
