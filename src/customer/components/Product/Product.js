import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import ProductCard from './ProductCard';
import { filters, singleFilter } from './FilterData';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { findProducts } from '../../../State/Product/Action.js';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
const sortOptions = [
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
];
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
export default function Product() {
    var _a, _b, _c;
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const decodedQueryString = decodeURIComponent(location.search);
    const searchParams = new URLSearchParams(decodedQueryString);
    const stock = searchParams.get("stock");
    const sizeValue = searchParams.get("size");
    const sortValue = searchParams.get("sort");
    const colorValue = searchParams.get("color");
    const priceValue = searchParams.get("price");
    const pageNumber = searchParams.get("page") || 1;
    const discountValue = searchParams.get("discount");
    const param = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector((state) => state);
    useEffect(() => {
        const [minPrice, maxPrice] = priceValue == null ? [0, 10000] : priceValue.split("-").map(Number);
        const data = {
            category: param.levelThree,
            colors: colorValue || [],
            sizes: sizeValue || [],
            minPrice,
            maxPrice,
            minDiscount: discountValue || 0,
            sort: sortValue || 'price_low',
            pageNumber: typeof pageNumber === 'string' ? parseInt(pageNumber) - 1 : 0,
            pageSize: 10,
            stock: stock,
        };
        dispatch(findProducts(data));
    }, [param.levelThree, colorValue, sizeValue, priceValue, discountValue, sortValue, pageNumber, stock]);
    const handleFilter = (value, sectionId) => {
        var _a;
        const searchParams = new URLSearchParams(location.search);
        let filterValue = searchParams.getAll(sectionId);
        if (filterValue.length > 0 && ((_a = filterValue[0]) === null || _a === void 0 ? void 0 : _a.includes(value))) {
            filterValue = filterValue[0].split(',').filter((item) => item != value);
            if (filterValue.length === 0) {
                searchParams.delete(sectionId);
            }
        }
        else {
            filterValue.push(value);
        }
        if (filterValue.length > 0) {
            searchParams.set(sectionId, filterValue.join(','));
        }
        const query = searchParams.toString();
        navigate({ search: `?${query}` });
    };
    const handleRadioFilterChange = (e, sectionId) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set(sectionId, e.target.value);
        const query = searchParams.toString();
        navigate({ search: `?${query}` });
    };
    const handlePaginationChange = (event, value) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("page", value);
        console.log(event);
        const query = searchParams.toString();
        navigate({ search: `?${query}` });
    };
    return (_jsx("div", { className: "bg-white", children: _jsxs("div", { children: [_jsxs(Dialog, { open: mobileFiltersOpen, onClose: setMobileFiltersOpen, className: "relative z-40 lg:hidden", children: [_jsx(DialogBackdrop, { transition: true, className: "fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" }), _jsx("div", { className: "fixed inset-0 z-40 flex", children: _jsxs(DialogPanel, { transition: true, className: "relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full", children: [_jsxs("div", { className: "flex items-center justify-between px-4", children: [_jsx("h2", { className: "text-lg font-medium text-gray-900", children: "Filters" }), _jsxs("button", { type: "button", onClick: () => setMobileFiltersOpen(false), className: "-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400", children: [_jsx("span", { className: "sr-only", children: "Close menu" }), _jsx(XMarkIcon, { "aria-hidden": "true", className: "size-6" })] })] }), _jsx("form", { className: "mt-4 border-t border-gray-200", children: filters.map((section) => (_jsxs(Disclosure, { as: "div", className: "border-t border-gray-200 px-4 py-6", children: [_jsx("h3", { className: "-mx-2 -my-3 flow-root", children: _jsxs(DisclosureButton, { className: "group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500", children: [_jsx("span", { className: "font-medium text-gray-900", children: section.name }), _jsxs("span", { className: "ml-6 flex items-center", children: [_jsx(PlusIcon, { "aria-hidden": "true", className: "size-5 group-data-[open]:hidden" }), _jsx(MinusIcon, { "aria-hidden": "true", className: "size-5 [.group:not([data-open])_&]:hidden" })] })] }) }), _jsx(DisclosurePanel, { className: "pt-6", children: _jsx("div", { className: "space-y-6", children: section.options.map((option, optionIdx) => (_jsxs("div", { className: "flex gap-3", children: [_jsx("div", { className: "flex h-5 shrink-0 items-center", children: _jsxs("div", { className: "group grid size-4 grid-cols-1", children: [_jsx("input", { defaultValue: option.value, id: `filter-mobile-${section.id}-${optionIdx}`, name: `${section.id}[]`, type: "checkbox", className: "col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" }), _jsxs("svg", { fill: "none", viewBox: "0 0 14 14", className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25", children: [_jsx("path", { d: "M3 8L6 11L11 3.5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "opacity-0 group-has-[:checked]:opacity-100" }), _jsx("path", { d: "M3 7H11", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "opacity-0 group-has-[:indeterminate]:opacity-100" })] })] }) }), _jsx("label", { htmlFor: `filter-mobile-${section.id}-${optionIdx}`, className: "min-w-0 flex-1 text-gray-500", children: option.label })] }, option.value))) }) })] }, section.id))) })] }) })] }), _jsxs("main", { className: "mx-auto px-4 sm:px-6 lg:px-20", children: [_jsxs("div", { className: "flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24", children: [_jsx("h1", { className: "text-4xl font-bold tracking-tight text-gray-900", children: "New Arrivals" }), _jsxs("div", { className: "flex items-center", children: [_jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [_jsx("div", { children: _jsxs(MenuButton, { className: "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900", children: ["Sort", _jsx(ChevronDownIcon, { "aria-hidden": "true", className: "-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500" })] }) }), _jsx(MenuItems, { transition: true, className: "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in", children: _jsx("div", { className: "py-1", children: sortOptions.map((option) => (_jsx(MenuItem, { children: _jsx("a", { href: option.href, className: classNames(option.current ? 'font-medium text-gray-900' : 'text-gray-500', 'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none'), children: option.name }) }, option.name))) }) })] }), _jsxs("button", { type: "button", className: "-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7", children: [_jsx("span", { className: "sr-only", children: "View grid" }), _jsx(Squares2X2Icon, { "aria-hidden": "true", className: "size-5" })] }), _jsxs("button", { type: "button", onClick: () => setMobileFiltersOpen(true), className: "-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden", children: [_jsx("span", { className: "sr-only", children: "Filters" }), _jsx(FunnelIcon, { "aria-hidden": "true", className: "size-5" })] })] })] }), _jsxs("section", { "aria-labelledby": "products-heading", className: "pb-24 pt-6", children: [_jsx("h2", { id: "products-heading", className: "sr-only", children: "Products" }), _jsxs("div", { className: "grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5", children: [_jsxs("div", { children: [_jsxs("div", { className: 'py-10 flex justify-between items-center', children: [_jsx("h1", { className: 'text-lg opacity-70 font-bold', children: "Filters" }), _jsx(FilterListIcon, {})] }), _jsxs("form", { className: "hidden lg:block", children: [filters.map((section) => (_jsxs(Disclosure, { as: "div", className: "border-b border-gray-200 py-6", children: [_jsx("h3", { className: "-my-3 flow-root", children: _jsxs(DisclosureButton, { className: "group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500", children: [_jsx("span", { className: "font-medium text-gray-900", children: section.name }), _jsxs("span", { className: "ml-6 flex items-center", children: [_jsx(PlusIcon, { "aria-hidden": "true", className: "size-5 group-data-[open]:hidden" }), _jsx(MinusIcon, { "aria-hidden": "true", className: "size-5 [.group:not([data-open])_&]:hidden" })] })] }) }), _jsx(DisclosurePanel, { className: "pt-6", children: _jsx("div", { className: "space-y-4", children: section.options.map((option, optionIdx) => (_jsxs("div", { className: "flex gap-3", children: [_jsx("div", { className: "flex h-5 shrink-0 items-center", children: _jsxs("div", { className: "group grid size-4 grid-cols-1", children: [_jsx("input", { onChange: () => { handleFilter(option.value, section.id); }, defaultValue: option.value, id: `filter-${section.id}-${optionIdx}`, name: `${section.id}[]`, type: "checkbox", className: "col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" }), _jsxs("svg", { fill: "none", viewBox: "0 0 14 14", className: "pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25", children: [_jsx("path", { d: "M3 8L6 11L11 3.5", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "opacity-0 group-has-[:checked]:opacity-100" }), _jsx("path", { d: "M3 7H11", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "opacity-0 group-has-[:indeterminate]:opacity-100" })] })] }) }), _jsx("label", { htmlFor: `filter-${section.id}-${optionIdx}`, className: "text-sm text-gray-600", children: option.label })] }, option.value))) }) })] }, section.id))), singleFilter.map((section) => (_jsxs(Disclosure, { as: "div", className: "border-b border-gray-200 py-6", children: [_jsx("h3", { className: "-my-3 flow-root", children: _jsxs(DisclosureButton, { className: "group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500", children: [_jsx(FormLabel, { sx: { color: 'black' }, className: 'text-gray-900', id: "demo-radio-buttons-group-label", children: section.name }), _jsxs("span", { className: "ml-6 flex items-center", children: [_jsx(PlusIcon, { "aria-hidden": "true", className: "size-5 group-data-[open]:hidden" }), _jsx(MinusIcon, { "aria-hidden": "true", className: "size-5 [.group:not([data-open])_&]:hidden" })] })] }) }), _jsx(DisclosurePanel, { className: "pt-6", children: _jsx("div", { className: "space-y-4", children: _jsx(FormControl, { children: _jsx(RadioGroup, { "aria-labelledby": "demo-radio-buttons-group-label", name: "radio-buttons-group", children: section.options.map((option) => (_jsx(FormControlLabel, { onChange: (e) => handleRadioFilterChange(e, section.id), value: option === null || option === void 0 ? void 0 : option.value, control: _jsx(Radio, {}), label: option === null || option === void 0 ? void 0 : option.label }))) }) }) }) })] }, section.id)))] })] }), _jsx("div", { className: "w-full lg:col-span-4", children: _jsx("div", { className: 'flex flex-wrap bg-white py-5 justify-center', children: (_b = (_a = product === null || product === void 0 ? void 0 : product.products) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.map((item, index) => _jsx(ProductCard, { product: item }, index)) }) })] })] }), _jsx("section", { className: 'w-full px-[3-6rem]', children: _jsx("div", { className: 'px-4 py-5 flex justify-center', children: _jsx(Pagination, { count: (_c = product === null || product === void 0 ? void 0 : product.products) === null || _c === void 0 ? void 0 : _c.totalPages, onChange: handlePaginationChange, color: "secondary" }) }) })] })] }) }));
}
