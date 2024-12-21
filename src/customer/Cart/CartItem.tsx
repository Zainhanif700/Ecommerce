/* Component */

import IconButton from "@mui/material/IconButton"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from "@mui/material/Button";

const CartItem = () => {

    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className="w-full h-full object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70" alt="" />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">Lorem ipsum dolor sit amet </p>
                    <p className="opacity-70">Size: L, White</p>
                    <p className="opacity-70 mt-2">Seller: Critzeus White</p>

                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <div className='flex space-x-5 items-center text-lg text-gray-900 pt-6'>
                            <p className='font-semibold'>
                                $199
                            </p>
                            <p className='opacity-50 line-through'>
                                $205
                            </p>
                            <p className='text-green-600 font-semibold'>
                                5%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton >
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">
                        3
                    </span>
                    <IconButton sx={{color:'RGB(145 85 253)'}}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                </div>
                <div>
                    <Button sx={{color:'RGB(145 85 253)'}}>remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
