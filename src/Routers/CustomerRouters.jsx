import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage";
import Cart from "../customer/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";

function CustomerRouters() {
    return (
        <div>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/login' element={<HomePage />}></Route>
                <Route path='/verify' element={<HomePage />}></Route>
                <Route path='/register' element={<HomePage />}></Route>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree/' element={<Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/account/order' element={<Order />}></Route>
                <Route path='/account/order/:orderID' element={<OrderDetails />}></Route>
                <Route path='/payment/:orderId' element={<PaymentSuccess />}></Route>
            </Routes>
            <div className="pt-10">
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRouters;
