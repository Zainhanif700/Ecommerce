/* REACT */
import { useState } from "react";
import AliceCarousel from "react-alice-carousel"

/* MUI */
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CircularProgress from '@mui/material/CircularProgress';
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
    const items = data?.slice(0, 10).map((item, index) => <HomeSectionCard product={item} keys={item?.id} />);

    /* Slider Functions */
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <>
            {
                items==null || items?.length == 0 ? (
                    <div className="flex justify-center items-center h-[50vh]">
                        <CircularProgress />
                    </div>
                ) :
                    (
                        <>
                            <div className="border">
                                <h2 className="text-xl font-extrabold text-gray pl-2 py-5">
                                    {sectionName}

                                </h2>
                                <div className="relative p-5 ">
                                    <AliceCarousel
                                        items={items}
                                        disableButtonsControls
                                        responsive={responsive}
                                        disableDotsControls
                                        onSlideChanged={syncActiveIndex}
                                        activeIndex={activeIndex}
                                        onInitialized={() => setActiveIndex(0)}
                                    />
                                </div>
                            </div>
                        </>
                    )}
        </>
    )
}

export default HomeSectionCarousel
