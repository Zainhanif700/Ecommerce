import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ProductReviewCard from './ProductReviewCard';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { mens_kurta } from '../../Data/mens_kurta';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../State/Cart/Action.js';
import { findProductsById } from '../../../State/Product/Action.js';
const products = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
    ],
    description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details: 'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
export default function ProductDetails() {
    var _a, _b, _c, _d, _e, _f, _g;
    const dispatch = useDispatch();
    const { product } = useSelector((store) => store);
    const navigate = useNavigate();
    const params = useParams();
    const [selectedSize, setSelectedSize] = useState();
    const handleAddToCart = () => {
        const data = { productId: params.productId, size: selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.name };
        dispatch(addItemToCart(data));
        navigate('/cart');
    };
    useEffect(() => {
        const data = { productId: params.productId };
        dispatch(findProductsById(data));
    }, [params.productId]);
    return (_jsx("div", { className: "bg-white lg:px-20", children: _jsxs("div", { className: "pt-6", children: [_jsx("nav", { "aria-label": "Breadcrumb", children: _jsxs("ol", { role: "list", className: "mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8", children: [products.breadcrumbs.map((breadcrumb) => (_jsx("li", { children: _jsxs("div", { className: "flex items-center", children: [_jsx("a", { href: breadcrumb.href, className: "mr-2 text-sm font-medium text-gray-900", children: breadcrumb.name }), _jsx("svg", { fill: "currentColor", width: 16, height: 20, viewBox: "0 0 16 20", "aria-hidden": "true", className: "h-5 w-4 text-gray-300", children: _jsx("path", { d: "M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" }) })] }) }, breadcrumb.id))), _jsx("li", { className: "text-sm", children: _jsx("a", { href: product.href, "aria-current": "page", className: "font-medium text-gray-500 hover:text-gray-600", children: product.name }) })] }) }), _jsxs("section", { className: 'grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10', children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx("div", { className: "overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]", children: _jsx("img", { alt: "Image of Product", src: (_a = product.product) === null || _a === void 0 ? void 0 : _a.imageUrl, className: "h-full w-full object-cover object-center" }) }), _jsx("div", { className: "flex flex-wrap space-x-5 justify-center", children: products.images.map((image) => _jsx("div", { className: 'aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4', children: _jsx("img", { alt: image.alt, src: image.src, className: "aspect-[3/2] size-full rounded-lg object-cover" }) })) })] }), _jsxs("div", { className: "lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24", children: [_jsxs("div", { className: "lg:col-span-2 ", children: [_jsx("h1", { className: "text-lg lg:text-xl font-semibold text-gray-900", children: (_b = product.product) === null || _b === void 0 ? void 0 : _b.brand }), _jsx("h1", { className: "text-lg lg:text-xl text-gray-900 opacity-60 pt-1", children: (_c = product.product) === null || _c === void 0 ? void 0 : _c.title })] }), _jsxs("div", { className: "mt-4 lg:row-span-3 lg:mt-0", children: [_jsx("h2", { className: "sr-only", children: "Product information" }), _jsxs("div", { className: 'flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6', children: [_jsx("p", { className: 'font-semibold', children: (_d = product.product) === null || _d === void 0 ? void 0 : _d.discountedPrice }), _jsx("p", { className: 'opacity-50 line-through', children: (_e = product.product) === null || _e === void 0 ? void 0 : _e.price }), _jsxs("p", { className: 'text-green-600 font-semibold', children: [(_f = product.product) === null || _f === void 0 ? void 0 : _f.discountedPersent, "%"] })] }), _jsx("div", { className: "mt-6", children: _jsxs("div", { className: 'flex items-center space-x-3', children: [_jsx(Rating, { name: "read-only", value: 5.5, readOnly: true }), _jsx("p", { className: 'opacity-50 text-sm', children: "763 Ratings" }), _jsx("p", { className: 'ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-600', children: "538703 Reviews" })] }) }), _jsxs("form", { className: "mt-10", children: [_jsxs("div", { className: "mt-10", children: [_jsx("div", { className: "flex items-center justify-between", children: _jsx("h3", { className: "text-sm font-medium text-gray-900", children: "Size" }) }), _jsx("fieldset", { "aria-label": "Choose a size", className: "mt-4", children: _jsx(RadioGroup, { value: selectedSize, onChange: setSelectedSize, className: "grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4", children: products.sizes.map((size) => (_jsxs(Radio, { value: size, disabled: !size.inStock, className: classNames(size.inStock
                                                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                                        : 'cursor-not-allowed bg-gray-50 text-gray-200', 'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6'), children: [_jsx("span", { children: size.name }), size.inStock ? (_jsx("span", { "aria-hidden": "true", className: "pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500" })) : (_jsx("span", { "aria-hidden": "true", className: "pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200", children: _jsx("svg", { stroke: "currentColor", viewBox: "0 0 100 100", preserveAspectRatio: "none", className: "absolute inset-0 size-full stroke-2 text-gray-200", children: _jsx("line", { x1: 0, x2: 100, y1: 100, y2: 0, vectorEffect: "non-scaling-stroke" }) }) }))] }, size.name))) }) })] }), _jsx(Button, { variant: 'contained', onClick: handleAddToCart, sx: { px: '2rem', py: '1rem', mt: '2rem', bgcolor: '#9155fd' }, children: "Add to Cart" })] })] }), _jsxs("div", { className: "py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "sr-only", children: "Description" }), _jsx("div", { className: "space-y-6", children: _jsx("p", { className: "text-base text-gray-900", children: product.description }) })] }), _jsxs("div", { className: "mt-10", children: [_jsx("h3", { className: "text-sm font-medium text-gray-900", children: "Highlights" }), _jsx("div", { className: "mt-4", children: _jsx("ul", { role: "list", className: "list-disc space-y-2 pl-4 text-sm", children: products.highlights.map((highlight) => (_jsx("li", { className: "text-gray-400", children: _jsx("span", { className: "text-gray-600", children: highlight }) }, highlight))) }) })] }), _jsxs("div", { className: "mt-10", children: [_jsx("h2", { className: "text-sm font-medium text-gray-900", children: "Details" }), _jsx("div", { className: "mt-4 space-y-6", children: _jsx("p", { className: "text-sm text-gray-600", children: product.details }) })] })] })] })] }), _jsxs("section", { children: [_jsx("h1", { className: 'font-semibold text-lg pb-4', children: "Recent Review & Rating" }), _jsx("div", { className: 'border p-5', children: _jsxs(Grid, { container: true, spacing: 7, children: [_jsx(Grid, { item: true, xs: 7, children: _jsx("div", { className: 'space-y-5', children: [1, 1, 1].map(() => _jsx(ProductReviewCard, {})) }) }), _jsxs(Grid, { item: true, xs: 5, children: [_jsx("h1", { className: 'text-xl font-semibold pb-2', children: "Product Ratings" }), _jsxs("div", { className: 'flex items-center space-x-3', children: [_jsx(Rating, { name: 'read-only', value: 4.6, precision: 0.5, readOnly: true }), _jsx("p", { className: 'opactiy-60', children: "4398 Ratings" })] }), _jsxs(Box, { className: 'mt-5 space-y', children: [_jsxs(Grid, { container: true, gap: 2, alignItems: 'center', children: [_jsx(Grid, { item: true, xs: 2, children: _jsx("p", { children: "Excellent" }) }), _jsx(Grid, { item: true, xs: 7, children: _jsx(LinearProgress, { sx: { bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }, variant: 'determinate', value: 60, color: 'success' }) })] }), _jsxs(Grid, { container: true, gap: 2, alignItems: 'center', children: [_jsx(Grid, { item: true, xs: 2, children: _jsx("p", { children: "Very Good" }) }), _jsx(Grid, { item: true, xs: 7, children: _jsx(LinearProgress, { sx: { bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }, variant: 'determinate', value: 45, color: 'success' }) })] }), _jsxs(Grid, { container: true, gap: 2, alignItems: 'center', children: [_jsx(Grid, { item: true, xs: 2, children: _jsx("p", { children: "Good" }) }), _jsx(Grid, { item: true, xs: 7, children: _jsx(LinearProgress, { sx: {
                                                                        bgcolor: '#d0d0d0', borderRadius: 4, height: 7, '& .MuiLinearProgress-bar': {
                                                                            backgroundColor: 'yellow',
                                                                        },
                                                                    }, variant: 'determinate', value: 35, className: 'bg-yellow-300' }) })] }), _jsxs(Grid, { container: true, gap: 2, alignItems: 'center', children: [_jsx(Grid, { item: true, xs: 2, children: _jsx("p", { children: "Average" }) }), _jsx(Grid, { item: true, xs: 7, children: _jsx(LinearProgress, { sx: { bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }, variant: 'determinate', value: 25, color: 'warning' }) })] }), _jsxs(Grid, { container: true, gap: 2, alignItems: 'center', children: [_jsx(Grid, { item: true, xs: 2, children: _jsx("p", { children: "Poor" }) }), _jsx(Grid, { item: true, xs: 7, children: _jsx(LinearProgress, { sx: { bgcolor: '#d0d0d0', borderRadius: 4, height: 7 }, variant: 'determinate', value: 17, color: 'error' }) })] })] })] })] }) })] }), _jsxs("section", { className: 'pt-10', children: [_jsx("h1", { className: 'py-5 text-xl font-bold', children: " Similar Products" }), _jsx("div", { className: 'flex flex-wrap ', children: (_g = mens_kurta === null || mens_kurta === void 0 ? void 0 : mens_kurta.slice(0, 10)) === null || _g === void 0 ? void 0 : _g.map((item, index) => _jsx(HomeSectionCard, { product: item, keys: index })) })] })] }) }));
}
