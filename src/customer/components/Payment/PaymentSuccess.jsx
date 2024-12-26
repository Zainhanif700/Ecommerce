import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../../State/Order/Action.js';
import { Alert, AlertTitle, Grid } from '@mui/material';
import OrderTracker from '../Order/OrderTracker.jsx';
import AddressCard from '../AddressCard/AddressCard.jsx';

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState<string | null>(null);
    const { orderId } = useParams();

    const dispatch = useDispatch();
    const { order } = useSelector((store) => store);

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get('paymentId'));
    }, [])

    useEffect(() => {
        dispatch(getOrderById(orderId))
    }, [orderId, paymentId])

    return (
        <div className='px-2 lg:px-36'>
            <div className='flex flex-col justify-center items-center'>
                <Alert
                    variant='filled'
                    severity='success'
                    sx={{ mb: 6, width: 'fit-content' }}>
                    <AlertTitle>Payment Success</AlertTitle>
                    Congratulations Your Order Get Placed
                </Alert>
            </div>
            <OrderTracker activeStep={1} label={undefined} />
            <Grid container className='space-y-5 py-5 pt-20'>
                {order.orders?.orderItem?.map((item) =>
                    <Grid container item className='shadow-xl rounded-md p-5'
                        sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid item xs={6}>
                            <div className='flex items-center'>
                                <img className='w-[5rem] object-cover object-top h-[5rem]' src={item.product.imageUrl} alt="" />
                                <div className='ml-5 space-y-2'>
                                    <p>{item.product.title}</p>
                                    <div className='opacity-50 text-xs font-semibold space-x-5'>
                                        <span>Color: {item.color??'Black'}</span>
                                        <span>Size: {item.size}</span>
                                    </div>
                                    <p>Seller: {item?.product?.brand?? 'xxxx'}</p>
                                    <p>${item.price-item.discountedPrice}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <AddressCard address={order.orders?.shippingAddress}/>

                        </Grid>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default PaymentSuccess
