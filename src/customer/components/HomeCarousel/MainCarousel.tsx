import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

interface CarouselData {
    image: string;
    path: string;
}

const MainCarousel = () => {
    const items = (MainCarouselData as CarouselData[]).map((data) => <img className='cursor-pointer -z-10' onClick={() => { console.log('click') }} role='presentation' src={data.image} alt='' />);

    return (
        <AliceCarousel
            autoPlay
            infinite
            items={items}
            autoPlayInterval={3000}
            disableButtonsControls

        />
    )
};

export default MainCarousel;