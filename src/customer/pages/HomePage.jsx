import { useEffect } from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel"
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel"
import { mens_kurta } from '../Data/mens_kurta';
import { findProducts, findProductsByBrands, findProductsByDecoration, findProductsByFurniture } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {

  const { product } = useSelector((state) => state); 
  const dispatch = useDispatch();
  const dataForFuniture = {
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
  const dataForDecoration = {
    category: "Lamps",
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
  const dataForBrands = {
    category: "Rustic Charm",
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

  useEffect(()=>{
    dispatch(findProductsByFurniture(dataForFuniture))
    dispatch(findProductsByDecoration(dataForDecoration))
    dispatch(findProductsByBrands(dataForBrands))

  },[])

  console.log(product)

  return (
    <>
      <div >
        <MainCarousel />
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarousel data={product?.productsByFurniture?.content} sectionName={"Furniture"} />
          <HomeSectionCarousel data={product?.productsByDecoration?.content} sectionName={"Decoration"} />
          <HomeSectionCarousel data={product?.productsByBrands?.content} sectionName={"Brand"} />

        </div>

      </div>
    </>
  )
}

export default HomePage
