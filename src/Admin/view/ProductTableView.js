import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from '../../State/Product/Action.js';
const ProductTableView = () => {
    var _a, _b, _c;
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state);
    useEffect(() => {
        const data = {
            category: "mens_kurta",
            colors: [],
            sizes: [],
            minPrice: 0,
            maxPrice: 1000000,
            minDiscount: 0,
            sort: 'price_low',
            pageNumber: 0,
            pageSize: 20,
            stock: "",
        };
        dispatch(findProducts(data));
    }, [product.deletedProduct]);
    return (_jsx("div", { children: _jsxs(Card, { className: 'mt-2 w-[100%]', children: [_jsx(CardHeader, { title: 'Recent Products' }), _jsx(TableContainer, { component: Paper, children: _jsxs(Table, { "aria-label": "simple table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: "Image" }), _jsx(TableCell, { align: "left", children: "Title" }), _jsx(TableCell, { align: "left", children: "Category" }), _jsx(TableCell, { align: "left", children: "Price" }), _jsx(TableCell, { align: "left", children: "Quantity" })] }) }), _jsx(TableBody, { children: (_c = (_b = (_a = product.products) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.slice(0, 5)) === null || _c === void 0 ? void 0 : _c.map((row) => {
                                    var _a;
                                    return (_jsxs(TableRow, { sx: { '&:last-child td, &:last-child th': { border: 0 } }, children: [_jsx(TableCell, { align: "left", children: _jsx(Avatar, { src: `${row.imageUrl}` }) }), _jsx(TableCell, { align: "left", scope: "row", children: row === null || row === void 0 ? void 0 : row.title }), _jsx(TableCell, { align: "left", children: (_a = row === null || row === void 0 ? void 0 : row.category) === null || _a === void 0 ? void 0 : _a.name }), _jsx(TableCell, { align: "left", children: row === null || row === void 0 ? void 0 : row.price }), _jsx(TableCell, { align: "left", children: row === null || row === void 0 ? void 0 : row.quantity })] }, row === null || row === void 0 ? void 0 : row.id));
                                }) })] }) })] }) }));
};
export default ProductTableView;
