import { useEffect } from "react";
import OrderCard from "./OrderCard";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentOrder } from '../../../State/Order/Action.js';

function Order() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { order } = useSelector((store) => store);

    useEffect(() => {
        dispatch(getCurrentOrder())
    }, [])

    console.log(order?.orders?.length)

    return (
        <div onClick={() => { navigate(`/account/order/${5}`) }} className="px-5 lg:px-20">
            <Grid item xs={9}>
                <div className="space-y-5">
                    {order?.orders?.map((order) => <OrderCard order={order}/>)}
                </div>
            </Grid>
        </div>
    )
}

export default Order;
