/* REACT */
import { useState } from "react";
import AliceCarousel from "react-alice-carousel"

/* MUI */
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

/* Component */
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const HomeSectionCarousel = ({ data, sectionName }: { data: any, sectionName: string }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const responsive = {
        0: { items: 2 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    /* Slider Data */
    const items = data.slice(0, 10).map((item, index) => <HomeSectionCard product={item} key={index} />);

    /* Slider Functions */
    const syncActiveIndex = ({ item }: { item: number }) => setActiveIndex(item);
    const slidePrev = () => { if (activeIndex > 0) setActiveIndex(activeIndex - 1) }
    const slideNext = () => { if (activeIndex < items.length) setActiveIndex((prevIndex) => prevIndex + 1)};

    return (
        <>
            <div className="border">
                <h2 className="text-xl font-extrabold text-gray pl-2 py-5">
                    {sectionName}
                </h2>
                <div className="relative p-5 ">
                    {activeIndex !== 0 &&
                        <Button
                            variant="contained"
                            sx={{
                                position: 'absolute',
                                top: '8rem',
                                left: '0rem',
                                bgcolor: 'white',
                                transform: 'translateX(-50%) rotate(90deg)'
                            }}
                            aria-label="next"
                            className="z-50 bg-white"
                            onClick={slidePrev}
                        >
                            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: 'black' }} />
                        </Button>}

                    <AliceCarousel
                        items={items}
                        disableButtonsControls
                        responsive={responsive}
                        disableDotsControls
                        onSlideChanged={syncActiveIndex}
                        activeIndex={activeIndex}
                        onInitialized={() => setActiveIndex(0)}
                    />

                    {activeIndex !== items.length - 5 &&
                        <Button
                            variant="contained"
                            sx={{
                                position: 'absolute',
                                top: '8rem',
                                right: '0rem',
                                bgcolor: 'white',
                                transform: 'translateX(50%) rotate(90deg)'
                            }}
                            aria-label="next"
                            className="z-50 bg-white"
                            onClick={slideNext}
                        >
                            <KeyboardArrowLeftIcon sx={{ transform: ' rotate(90deg)', color: 'black' }} />
                        </Button>}


                </div>
            </div>
        </>
    )
}

export default HomeSectionCarousel
