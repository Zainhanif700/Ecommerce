import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* Component */
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
const ProductReviewCard = () => {
    return (_jsx(_Fragment, { children: _jsxs(Grid, { container: true, spacing: 2, gap: 3, children: [_jsx(Grid, { item: true, xs: 1, children: _jsx(Box, { children: _jsx(Avatar, { className: "text-white", sx: { width: 56, height: 56, bgcolor: '#9155fd' } }) }) }), _jsxs(Grid, { item: true, xs: 9, children: [_jsx("div", { className: "space-y-2", children: _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-lg", children: "Raam" }), _jsx("p", { className: "opacity-70", children: "April 5, 2023" })] }) }), _jsx(Rating, { value: 4.5, name: 'half-rating', precision: 0.5, readOnly: true }), _jsx("p", { children: "Lorem ipsum dolor sit amet " })] })] }) }));
};
export default ProductReviewCard;
