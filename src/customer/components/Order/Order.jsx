import { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentOrder } from "../../../State/Order/Action.js";

function Order() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { order } = useSelector((store) => store);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Show loading state
        dispatch(getCurrentOrder()).then(() => setLoading(false)); // Hide when data is fetched
    }, [dispatch]);

    return (
        <div className="px-5 lg:px-20">
            {loading ? (
                <div className="flex justify-center items-center h-[50vh]">
                    <CircularProgress />
                </div>
            ) : (
                <Grid item xs={9}>
                    <div className="space-y-5">
                        {order?.orders?.length > 0 ? (
                            order.orders.map((order) => <OrderCard key={order.id} order={order} />)
                        ) : (
                            <p className="text-center text-xl">No Orders Found</p>
                        )}
                    </div>
                </Grid>
            )}
        </div>
    );
}

export default Order;
