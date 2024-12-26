import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* REACT */
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
/* MUI */
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
/* Component */
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
const HomeSectionCarousel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 2 },
        720: { items: 3 },
        1024: { items: 5 },
    };
    /* Slider Data */
    const items = data.slice(0, 10).map((item, index) => _jsx(HomeSectionCard, { product: item, keys: index }));
    /* Slider Functions */
    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    const slidePrev = () => { if (activeIndex > 0)
        setActiveIndex(activeIndex - 1); };
    const slideNext = () => { if (activeIndex < items.length)
        setActiveIndex((prevIndex) => prevIndex + 1); };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "border", children: [_jsx("h2", { className: "text-xl font-extrabold text-gray pl-2 py-5", children: sectionName }), _jsxs("div", { className: "relative p-5 ", children: [activeIndex !== 0 &&
                            _jsx(Button, { variant: "contained", sx: {
                                    position: 'absolute',
                                    top: '8rem',
                                    left: '0rem',
                                    bgcolor: 'white',
                                    transform: 'translateX(-50%) rotate(90deg)'
                                }, "aria-label": "next", className: "z-50 bg-white", onClick: slidePrev, children: _jsx(KeyboardArrowLeftIcon, { sx: { transform: 'rotate(-90deg)', color: 'black' } }) }), _jsx(AliceCarousel, { items: items, disableButtonsControls: true, responsive: responsive, disableDotsControls: true, onSlideChanged: syncActiveIndex, activeIndex: activeIndex, onInitialized: () => setActiveIndex(0) }), activeIndex !== items.length - 5 &&
                            _jsx(Button, { variant: "contained", sx: {
                                    position: 'absolute',
                                    top: '8rem',
                                    right: '0rem',
                                    bgcolor: 'white',
                                    transform: 'translateX(50%) rotate(90deg)'
                                }, "aria-label": "next", className: "z-50 bg-white", onClick: slideNext, children: _jsx(KeyboardArrowLeftIcon, { sx: { transform: ' rotate(90deg)', color: 'black' } }) })] })] }) }));
};
export default HomeSectionCarousel;
