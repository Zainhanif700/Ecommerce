import { useEffect } from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel"
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel"
import { mens_kurta } from '../Data/mens_kurta';
import { findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {

  const { product } = useSelector((state) => state); 
  const dispatch = useDispatch();

  useEffect(()=>{

    const data = {
      category: "Sofas",
      colors: [],
      sizes: [],
      minPrice:0,
      maxPrice:10000,
      minDiscount: 0,
      sort:  'price_low',
      pageNumber: 0,
      pageSize: 10,
      stock: "null",
    }
    dispatch(findProducts(data))

  },[])


  return (
    <>
      <div>
        <MainCarousel />
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarousel data={product?.products?.content} sectionName={"Furniture"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Decoration"} />
          <HomeSectionCarousel data={mens_kurta} sectionName={"Brand"} />

        </div>

      </div>
    </>
  )
}

export default HomePage
