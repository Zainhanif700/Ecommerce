import { useEffect, useState } from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";
import { findProductsByBrands, findProductsByDecoration, findProductsByFurniture } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

function HomePage() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);
  
  const [loading, setLoading] = useState(true);

  const dataForFurniture = {
    category: "Sofas",
    colors: [],
    sizes: [],
    minPrice: 0,
    maxPrice: 10000,
    minDiscount: 0,
    sort: "price_low",
    pageNumber: 0,
    pageSize: 10,
    stock: "null",
  };
  const dataForDecoration = {
    category: "Lamps",
    colors: [],
    sizes: [],
    minPrice: 0,
    maxPrice: 10000,
    minDiscount: 0,
    sort: "price_low",
    pageNumber: 0,
    pageSize: 10,
    stock: "null",
  };
  const dataForBrands = {
    category: "Rustic Charm",
    colors: [],
    sizes: [],
    minPrice: 0,
    maxPrice: 10000,
    minDiscount: 0,
    sort: "price_low",
    pageNumber: 0,
    pageSize: 10,
    stock: "null",
  };

  useEffect(() => {
    setLoading(true); // Start loading
    Promise.all([
      dispatch(findProductsByFurniture(dataForFurniture)),
      dispatch(findProductsByDecoration(dataForDecoration)),
      dispatch(findProductsByBrands(dataForBrands)),
    ]).then(() => setLoading(false)); // Stop loading once all requests are done
  }, [dispatch]);

  return (
    <>
      <div >
        <MainCarousel />
        <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
          <HomeSectionCarousel data={product?.productsByFurniture?.content} sectionName={"Furniture"} />
          <HomeSectionCarousel data={product?.productsByDecoration?.content} sectionName={"Decoration"} />
        </div>
      </div>
    </>
  )
}
export default HomePage;
