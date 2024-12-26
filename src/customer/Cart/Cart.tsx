import Button from "@mui/material/Button"
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCart } from '../../State/Cart/Action.js';

const Cart = () => {

    const [updateCart, setUpdateCart] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cart } = useSelector(store => store);

    const handleCheckout = () => {
        navigate('/checkout?step=2')
    }

    useEffect(() => {
        dispatch(getCart());
    }, [updateCart])

    return (
        <>
            {cart?.cart?.cartItems?.length > 0 ? (
                <div>
                    <div className="lg:grid grid-cols-3 lg:px-16 relative">
                        {/* Cart Items Section */}
                        <div className="col-span-2">
                            {cart.cart.cartItems.map((item) => (
                                <CartItem 
                                    key={item.id} 
                                    item={item} 
                                    updateCart={updateCart} 
                                    setUpdateCart={setUpdateCart} 
                                />
                            ))}
                        </div>
    
                        {/* Price Details Section */}
                        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                            <div className="border mb-4">
                                <p className="uppercase font-bold opacity-60 py-4 px-2">
                                    Price Details
                                </p>
                                <hr />
                                <div className="span-y-3 font-semi-bold mb-6">
                                    <div className="flex justify-between pt-3 px-2 text-black">
                                        <span>Price</span>
                                        <span>${cart.cart.totalPrice}</span>
                                    </div>
                                    <div className="flex justify-between pt-3 px-2 text-black">
                                        <span>Discount</span>
                                        <span className="text-green-600">
                                            -${cart.cart.discount || 0}
                                        </span>
                                    </div>
                                    <div className="flex justify-between pt-3 px-2 text-black">
                                        <span>Delivery Charge</span>
                                        <span className="text-green-600">Free</span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between pt-2 px-2 text-black">
                                        <span>Total Amount</span>
                                        <span className="text-green-600">
                                            ${cart.cart.totalDiscountedPrice}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="contained"
                                onClick={handleCheckout}
                                className="w-full"
                                sx={{
                                    px: '2.5rem',
                                    py: '.7rem',
                                    bgcolor: '#9155fd',
                                }}
                            >
                                Checkout
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center text-xl ">No Items In The Cart</div>
            )}
        </>
    );
    
}

export default Cart
