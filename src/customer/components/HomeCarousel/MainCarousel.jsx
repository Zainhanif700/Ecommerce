import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
    const items = (
        MainCarouselData).map((data) =>
            <img className='cursor-pointer w-full -z-10 object-fill'
                onClick={() => { console.log('click') }}
                role='presentation'
                src={data.image} alt=''
            />
        );

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