import { jsx as _jsx } from "react/jsx-runtime";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData.tsx';
const MainCarousel = () => {
    const items = MainCarouselData.map((data) => _jsx("img", { className: 'cursor-pointer -z-10', onClick: () => { console.log('click'); }, role: 'presentation', src: data.image, alt: '' }));
    return (_jsx(AliceCarousel, { autoPlay: true, infinite: true, items: items, autoPlayInterval: 3000, disableButtonsControls: true }));
};
export default MainCarousel;
