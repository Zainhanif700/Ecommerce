import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from '../Data/mens_kurta';
function HomePage() {
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx(MainCarousel, {}), _jsxs("div", { className: "space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10", children: [_jsx(HomeSectionCarousel, { data: mens_kurta, sectionName: "Ment's Kurta" }), _jsx(HomeSectionCarousel, { data: mens_kurta, sectionName: "Ment's Shoes" }), _jsx(HomeSectionCarousel, { data: mens_kurta, sectionName: "Men's Shirt" }), _jsx(HomeSectionCarousel, { data: mens_kurta, sectionName: "Women's Saree" }), _jsx(HomeSectionCarousel, { data: mens_kurta, sectionName: "Women's Dress" })] })] }) }));
}
export default HomePage;
