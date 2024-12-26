import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Product/Action.js';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
const initialSizes = [
    { name: 'S', quantity: 0 },
    { name: 'M', quantity: 0 },
    { name: 'L', quantity: 0 },
];
function CreateProductForm() {
    var _a;
    const [productData, setProductData] = useState({
        imageUrl: '',
        brand: '',
        title: '',
        color: '',
        discountedPrice: '',
        price: '',
        discountPersent: '',
        size: initialSizes,
        quantity: '',
        topLavelCategory: '',
        secondLavelCategory: '',
        thirdLavelCategory: '',
        description: ''
    });
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevState) => (Object.assign(Object.assign({}, prevState), { [name]: value })));
    };
    const handleSizeChange = (e, index) => {
        let { name, value } = e.target;
        name = name === "size_quantity" ? 'quantity' : e.target.name;
        const sizes = [...productData.size];
        sizes[index][name] = value;
        setProductData((prevState) => (Object.assign(Object.assign({}, prevState), { size: sizes })));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProduct(productData));
    };
    return (_jsxs("div", { className: 'p-10', children: [_jsx(Typography, { variant: 'h3', sx: { textAlign: 'center' }, className: 'py-10 text-center', children: "Add New Product" }), _jsx("form", { onSubmit: handleSubmit, children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { fullWidth: true, label: 'Image URL', name: 'imageUrl', value: productData.imageUrl, onChange: handleChange }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { fullWidth: true, label: 'Brand', name: 'brand', value: productData.brand, onChange: handleChange }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { fullWidth: true, label: 'Title', name: 'title', value: productData.title, onChange: handleChange }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { fullWidth: true, label: 'Color', name: 'color', value: productData.color, onChange: handleChange }) }), _jsx(Grid, { item: true, xs: 12, sm: 4, children: _jsx(TextField, { fullWidth: true, label: 'Quantity', name: 'quantity', value: productData.quantity, onChange: handleChange, type: 'number' }) }), _jsx(Grid, { item: true, xs: 12, sm: 4, children: _jsx(TextField, { fullWidth: true, label: 'Price', name: 'price', value: productData.price, onChange: handleChange, type: 'number' }) }), _jsx(Grid, { item: true, xs: 12, sm: 4, children: _jsx(TextField, { fullWidth: true, label: 'Discounted Price', name: 'discountedPrice', value: productData.discountedPrice, onChange: handleChange, type: 'number' }) }), _jsx(Grid, { item: true, xs: 12, sm: 4, children: _jsx(TextField, { fullWidth: true, label: 'Discounted Percentage', name: 'discountPersent', value: productData.discountPersent, onChange: handleChange, type: 'number' }) }), _jsx(Grid, { item: true, xs: 6, sm: 4, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Top Level Category" }), _jsxs(Select, { name: 'topLavelCategory', value: productData.topLavelCategory, onChange: handleChange, label: 'Top Level Category', children: [_jsx(MenuItem, { value: "men", children: "Men" }), _jsx(MenuItem, { value: "women", children: "Women" }), _jsx(MenuItem, { value: "kids", children: "Kids" })] })] }) }), _jsx(Grid, { item: true, xs: 6, sm: 4, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Second Level Category" }), _jsxs(Select, { name: 'secondLavelCategory', value: productData.secondLavelCategory, onChange: handleChange, label: 'Second Level Category', children: [_jsx(MenuItem, { value: "clothing", children: "Clothing" }), _jsx(MenuItem, { value: "accessories", children: "Accessories" }), _jsx(MenuItem, { value: "brands", children: "Brands" })] })] }) }), _jsx(Grid, { item: true, xs: 6, sm: 4, children: _jsxs(FormControl, { fullWidth: true, children: [_jsx(InputLabel, { children: "Third Level Category" }), _jsxs(Select, { name: 'thirdLavelCategory', value: productData.thirdLavelCategory, onChange: handleChange, label: 'Third Level Category', children: [_jsx(MenuItem, { value: "top", children: "Tops" }), _jsx(MenuItem, { value: "women_dress", children: "Dresses" }), _jsx(MenuItem, { value: "t-shirts", children: "T-Shirts" }), _jsx(MenuItem, { value: "saree", children: "Saree" }), _jsx(MenuItem, { value: "lengha_choli", children: "Lengha Choli" }), _jsx(MenuItem, { value: "mens_kurta", children: "Mens Kurta" })] })] }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { fullWidth: true, id: 'outlined-multiline-static', label: 'Description', multiline: true, rows: 3, name: 'description', value: productData.description, onChange: handleChange }) }), (_a = productData === null || productData === void 0 ? void 0 : productData.size) === null || _a === void 0 ? void 0 : _a.map((size, index) => (_jsxs(Grid, { container: true, item: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { fullWidth: true, label: 'Size Name', name: 'name', value: size.name, onChange: (event) => handleSizeChange(event, index), required: true }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { fullWidth: true, label: 'Quantity', name: 'size_quantity', type: 'number', value: size.quantity, onChange: (event) => handleSizeChange(event, index), required: true }) })] }))), _jsx(Grid, { item: true, xs: 12, children: _jsx(Button, { variant: 'contained', sx: { p: 1.8 }, className: 'py-20', size: 'large', type: 'submit', children: "Add New Product" }) })] }) })] }));
}
export default CreateProductForm;
