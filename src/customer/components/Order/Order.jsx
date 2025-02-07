import Grid from "@mui/material/Grid";
import OrderCard from "./OrderCard";
import { useNavigate } from "react-router-dom";

function Order() {
    const navigate = useNavigate();

  
    return (
        <div onClick={()=>{navigate(`/account/order/${5}`)}} className="px-5 lg:px-20">
                <Grid item xs={9}>
                    <div className="space-y-5">
                    {[1].map(()=><OrderCard />)}
                    </div>
                </Grid>
        </div>
    )
}

export default Order;
