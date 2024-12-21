import Button from "@mui/material/Button"
import CartItem from "./CartItem"
import { useNavigate } from "react-router-dom";

/* Component */
const Cart = () => {

    const navigate = useNavigate();

    const handleCheckout = ()=>{
        navigate('/checkout?step=2')
    }

    return (
        <div>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {[1, 1, 1, 1, 1, 1, 1].map(() => <CartItem />)}
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border mb-4">
                        <p className="uppercase font-bold opacity-60 py-4 px-2">Price Details</p>
                        <hr />
                        <div className="span-y-3 font-semi-bold mb-6">
                            <div className="flex justify-between pt-3 px-2 text-black ">
                                <span>Price</span>
                                <span>$4565</span>
                            </div>
                            <div className="flex justify-between pt-3 px-2 text-black ">
                                <span>Discount</span>
                                <span className=" text-green-600">$1278</span>
                            </div>
                            <div className="flex justify-between pt-3 px-2 text-black ">
                                <span>Delivery Charge</span>
                                <span className=" text-green-600">Free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between pt-2 px-2 text-black ">
                                <span>Total Amount</span>
                                <span className=" text-green-600">$4565</span>
                            </div>
                        </div>
                    </div>
                    <Button variant='contained' onClick={handleCheckout} className="w-full" sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}>
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Cart
