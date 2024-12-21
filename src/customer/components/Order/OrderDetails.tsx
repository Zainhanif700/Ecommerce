import React from "react"
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import StarIcon from '@mui/icons-material/Star';

function OrderDetails() {
    return (
        <div className="lg:px-20 px-5">
            <div>
                <h1 className="font-bold text-xl py-7">Delivery Address</h1>
                <AddressCard />
            </div>
            <div className="py-20">
                <OrderTracker activeStep={3} label={'Order Shipped'}></OrderTracker>
            </div>
            <Grid className='space-y-5 ' container>
                {[1, 1, 1, 1, 1].map(() =>
                    <Grid item container className="shadow-xl rounded-md p-5 border" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid item xs={6}>
                            <div className="flex items-center space-x-4">
                                <img className="w-[5rem] h-[rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70" alt="" />
                                <div className="space-y-2 ml-5">
                                    <p className="font-semibold">Title Title Title </p>
                                    <p className="opacity-50 text-xs font-semibold space-x-5">
                                        <span>Color : Pink</span>
                                        <span>Size : M</span></p>
                                    <p>Seller : </p>
                                    <p>$199</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <Box sx={{ color: 'deeppink[500]' }}>
                                <StarIcon sx={{ fontSize: '2rem' }} className="px-2 text-2xl" />
                                <span>Rae & Review Product</span>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Grid>

        </div>
    )
}

export default OrderDetails;
