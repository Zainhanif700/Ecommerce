import IconButton from "@mui/material/IconButton"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from "@mui/material/Button";
import { updateItemToCart, removeItemToCart } from '../../State/Cart/Action.js';
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleUpdateCartItem=(num)=>{
        const data = {quantity:item.quantity+num, cartItemId:item?.id};
        dispatch(updateItemToCart(data))
    }

    const handleRemoveCartItem=()=>{
        dispatch(removeItemToCart(item.id))
    }


    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src={item?.product?.imageUrl} alt="" />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">{item?.product?.title}</p>
                    <p className="opacity-70">Size: {item?.size? item?.size : 'M'}, {item?.product?.color}</p>
                    <p className="opacity-70 mt-2">Seller: {item?.product?.brand?? '---'}</p>

                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <div className='flex space-x-5 items-center text-lg text-gray-900 pt-6'>
                            <p className='font-semibold'>
                                ${item?.price}
                            </p>
                            <p className='opacity-50 line-through'>
                                ${item?.discountedPrice}
                            </p>
                            <p className='text-green-600 font-semibold'>
                                {item?.discountPersent}% Off
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item?.quantity<=1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">
                        {item?.quantity}
                    </span>
                    <IconButton sx={{ color: 'RGB(145 85 253)' }} onClick={()=>handleUpdateCartItem(1)}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>
                <div>
                    <Button sx={{ color: 'RGB(145 85 253)' }} onClick={handleRemoveCartItem}>remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
