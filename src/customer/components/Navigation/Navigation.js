'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Popover, PopoverGroup, Tab, TabGroup, TabList, TabPanel, TabPanels, } from '@headlessui/react';
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthModal from '../../Auth/AuthModel';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "../../../State/Auth/Action.js";
import { logout } from '../../../State/Auth/Action.js';
const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Dresses', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Denim', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Significant Other', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Mens_kurta', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
};
export default function Example() {
    var _a, _b;
    /* React State */
    const [open, setOpen] = useState(false);
    const jwt = localStorage === null || localStorage === void 0 ? void 0 : localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const openUserMenu = Boolean(anchorEl);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    /* React Functions */
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorEl(null);
    };
    const handleOpen = () => {
        setOpenAuthModal(true);
    };
    const handleClose = () => {
        setOpenAuthModal(false);
    };
    const handleLogout = () => {
        dispatch(logout());
        handleCloseUserMenu();
    };
    const handleCategoryClick = (category, section, item) => {
        navigate(`/${category.id}/${section.id}/${item.name}`);
    };
    console.log('auth: ', auth);
    useEffect(() => {
        if (jwt)
            dispatch(getUser(jwt));
    }, [jwt, auth === null || auth === void 0 ? void 0 : auth.jwt]);
    useEffect(() => {
        if ((auth === null || auth === void 0 ? void 0 : auth.user) != null)
            handleClose();
        if (location.pathname === "/login" || location.pathname === "/register")
            navigate(-1);
    }, [auth === null || auth === void 0 ? void 0 : auth.user]);
    return (_jsxs("div", { className: "bg-white pb-10", children: [_jsxs(Dialog, { open: open, onClose: setOpen, className: "relative z-40 lg:hidden", children: [_jsx(DialogBackdrop, { transition: true, className: "fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0" }), _jsx("div", { className: "fixed inset-0 z-40 flex", children: _jsxs(DialogPanel, { transition: true, className: "relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full", children: [_jsx("div", { className: "flex px-4 pb-2 pt-5", children: _jsxs("button", { type: "button", onClick: () => setOpen(false), className: "relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400", children: [_jsx("span", { className: "absolute -inset-0.5" }), _jsx("span", { className: "sr-only", children: "Close menu" }), _jsx(XMarkIcon, { "aria-hidden": "true", className: "size-6" })] }) }), _jsxs(TabGroup, { className: "mt-2", children: [_jsx("div", { className: "border-b border-gray-200", children: _jsx(TabList, { className: "-mb-px flex space-x-8 px-4", children: navigation.categories.map((category) => (_jsx(Tab, { className: "flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600", children: category.name }, category.name))) }) }), _jsx(TabPanels, { as: Fragment, children: navigation.categories.map((category) => (_jsxs(TabPanel, { className: "space-y-10 px-4 pb-8 pt-10", children: [_jsx("div", { className: "grid grid-cols-2 gap-x-4", children: category.featured.map((item) => (_jsxs("div", { className: "group relative text-sm", children: [_jsx("img", { alt: item.imageAlt, src: item.imageSrc, className: "aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" }), _jsxs("a", { href: item.href, className: "mt-6 block font-medium text-gray-900", children: [_jsx("span", { "aria-hidden": "true", className: "absolute inset-0 z-10" }), item.name] }), _jsx("p", { "aria-hidden": "true", className: "mt-1", children: "Shop now" })] }, item.name))) }), category.sections.map((section) => (_jsxs("div", { children: [_jsx("p", { id: `${category.id}-${section.id}-heading-mobile`, className: "font-medium text-gray-900", children: section.name }), _jsx("ul", { role: "list", "aria-labelledby": `${category.id}-${section.id}-heading-mobile`, className: "mt-6 flex flex-col space-y-6", children: section.items.map((item) => (_jsx("li", { className: "flow-root", children: _jsx("a", { href: item.href, className: "-m-2 block p-2 text-gray-500", children: item.name }) }, item.name))) })] }, section.name)))] }, category.name))) })] }), _jsx("div", { className: "space-y-6 border-t border-gray-200 px-4 py-6", children: navigation.pages.map((page) => (_jsx("div", { className: "flow-root", children: _jsx("a", { href: page.href, className: "-m-2 block p-2 font-medium text-gray-900", children: page.name }) }, page.name))) }), _jsxs("div", { className: "space-y-6 border-t border-gray-200 px-4 py-6", children: [_jsx("div", { className: "flow-root", children: _jsx("a", { href: "#", className: "-m-2 block p-2 font-medium text-gray-900", children: "Sign in" }) }), _jsx("div", { className: "flow-root", children: _jsx("a", { href: "#", className: "-m-2 block p-2 font-medium text-gray-900", children: "Create account" }) })] }), _jsx("div", { className: "border-t border-gray-200 px-4 py-6", children: _jsxs("a", { href: "#", className: "-m-2 flex items-center p-2", children: [_jsx("img", { alt: "", src: "https://tailwindui.com/plus/img/flags/flag-canada.svg", className: "block h-auto w-5 shrink-0" }), _jsx("span", { className: "ml-3 block text-base font-medium text-gray-900", children: "CAD" }), _jsx("span", { className: "sr-only", children: ", change currency" })] }) })] }) })] }), _jsxs("header", { className: "relative bg-white", children: [_jsx("p", { className: "flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8", children: "LowTech GmbH" }), _jsx("nav", { "aria-label": "Top", className: "mx-auto", children: _jsx("div", { className: "border-b border-gray-200", children: _jsxs("div", { className: "flex h-16 items-center px-11", children: [_jsxs("button", { type: "button", onClick: () => setOpen(true), className: "rounded-md bg-white p-2 text-gray-400 lg:hidden", children: [_jsx("span", { className: "sr-only", children: "Open menu" }), _jsx(Bars3Icon, { "aria-hidden": "true", className: "h-6 w-6" })] }), _jsx("div", { className: "ml-4 flex lg:ml-0", children: _jsxs("a", { href: "/", children: [_jsx("span", { className: "sr-only", children: "Company" }), _jsx("img", { alt: "", src: "https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png", className: "h-8 w-auto" })] }) }), _jsx(PopoverGroup, { className: "hidden lg:ml-8 lg:block lg:self-stretch z-10", children: _jsxs("div", { className: "flex h-full space-x-8", children: [navigation.categories.map((category) => (_jsx(Popover, { className: "flex", children: ({ open, close }) => ( // Render-prop pattern to access 'close'
                                                    _jsxs(_Fragment, { children: [_jsx("div", { className: "relative flex", children: _jsx(Popover.Button, { className: classNames(open
                                                                        ? "border-indigo-600 text-indigo-600"
                                                                        : "border-transparent text-gray-700 hover:text-gray-800", "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800"), children: category.name }) }), _jsxs(Popover.Panel, { transition: true, className: "absolute inset-x-0 top-full text-sm text-gray-500", style: { zIndex: 10 }, children: [_jsx("div", { "aria-hidden": "true", className: "absolute inset-0 top-1/2 bg-white shadow" }), _jsx("div", { className: "relative bg-white", children: _jsx("div", { className: "mx-auto max-w-7xl px-8", children: _jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-10 py-16", children: [_jsx("div", { className: "col-start-2 grid grid-cols-2 gap-x-8", children: category.featured.map((item) => (_jsxs("div", { className: "group relative text-base sm:text-sm", children: [_jsx("img", { alt: item.imageAlt, src: item.imageSrc, className: "aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" }), _jsxs("a", { href: item.href, className: "mt-6 block font-medium text-gray-900", children: [_jsx("span", { "aria-hidden": "true", className: "absolute inset-0 z-10" }), item.name] }), _jsx("p", { "aria-hidden": "true", className: "mt-1", children: "Shop now" })] }, item.name))) }), _jsx("div", { className: "row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm", children: category.sections.map((section) => (_jsxs("div", { children: [_jsx("p", { id: `${section.name}-heading`, className: "font-medium text-gray-900", children: section.name }), _jsx("ul", { role: "list", "aria-labelledby": `${section.name}-heading`, className: "mt-6 space-y-6 sm:mt-4 sm:space-y-4", children: section.items.map((item) => (_jsx("li", { className: "flex", children: _jsx("p", { onClick: () => {
                                                                                                                handleCategoryClick(category, section, item);
                                                                                                                close(); // Close the popover
                                                                                                            }, className: "cursor-pointer hover:text-gray-800", children: item.name }) }, item.name))) })] }, section.name))) })] }) }) })] })] })) }, category.name))), navigation.pages.map((page) => (_jsx("a", { href: page.href, className: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-800", children: page.name }, page.name)))] }) }), _jsxs("div", { className: "ml-auto flex items-center", children: [_jsx("div", { className: "flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6", children: ((_a = auth === null || auth === void 0 ? void 0 : auth.user) === null || _a === void 0 ? void 0 : _a.firstName) ? (_jsxs("div", { children: [_jsx(Avatar, { className: "text-white", onClick: handleUserClick, "aria-controls": open ? "basic-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, sx: {
                                                                bgcolor: deepPurple[500],
                                                                color: "white",
                                                                cursor: "pointer"
                                                            }, children: (_b = auth === null || auth === void 0 ? void 0 : auth.user) === null || _b === void 0 ? void 0 : _b.firstName[0].toUpperCase() }), _jsxs(Menu, { id: "basic-menu", anchorEl: anchorEl, open: openUserMenu, onClose: handleCloseUserMenu, MenuListProps: {
                                                                "aria-labelledby": "basic-button",
                                                            }, children: [_jsx(MenuItem, { onClick: handleCloseUserMenu, children: "Profile" }), _jsx(MenuItem, { onClick: () => { navigate('/account/order'); }, children: "My Orders" }), _jsx(MenuItem, { onClick: handleLogout, children: "Logout" })] })] })) : (_jsx(Button, { onClick: handleOpen, className: "text-sm font-medium text-gray-700 hover:text-gray-800", children: "Sign in" })) }), _jsx("div", { className: "ml-4 flow-root lg:ml-6", children: _jsxs("a", { href: "/cart", className: "group -m-2 flex items-center p-2", children: [_jsx(ShoppingBagIcon, { "aria-hidden": "true", className: "size-6 shrink-0 text-gray-400 group-hover:text-gray-500" }), _jsx("span", { className: "sr-only", children: "items in cart, view bag" })] }) })] })] }) }) })] }), _jsx(AuthModal, { handleClose: handleClose, open: openAuthModal })] }));
}
