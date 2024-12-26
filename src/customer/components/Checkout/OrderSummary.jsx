import Button from "@mui/material/Button";
import CartItem from "../../Cart/CartItem";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getOrderById } from '../../../State/Order/Action.js';
import { createPayment } from '../../../State/Payment/Action.js';

function OrderSummary() {

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [])

  const handleCheckout = () => {
    const data = {
      "quantity": 1,
      "amount": order?.orders?.totalDiscountedPrice * 100,
      "currency": "USD",
      "name": "books"
    }
    dispatch(createPayment(orderId, data));
  }

  return (
    <div>
      <div className="p-5 rounded-s-md border">
        <AddressCard address={order?.orders?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid py-2 grid-cols-3 relative">
          <div className="col-span-2">
            {order?.orders?.orderItem?.map((item) => <CartItem item={item} summary={true}/>)}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border mb-4">
              <p className="uppercase font-bold opacity-60 py-4 px-2">Price Details</p>
              <hr />
              <div className="span-y-3 font-semi-bold mb-6">
                <div className="flex justify-between pt-3 px-2 text-black ">
                  <span>Price</span>
                  <span>${order?.orders?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 px-2 text-black ">
                  <span>Discount</span>
                  <span className=" text-green-600">${order?.orders?.discounte}</span>
                </div>
                <div className="flex justify-between pt-3 px-2 text-black ">
                  <span>Delivery Charge</span>
                  <span className=" text-green-600">Free</span>
                </div>
                <hr />
                <div className="flex justify-between pt-2 px-2 text-black ">
                  <span>Total Amount</span>
                  <span className=" text-green-600">${order?.orders?.totalDiscountedPrice}</span>
                </div>
              </div>
            </div>
            <Button variant='contained' onClick={handleCheckout} className="w-full" sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary;
