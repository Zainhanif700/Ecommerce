import Grid from "@mui/material/Grid";
import AdjustIcon from '@mui/icons-material/Adjust';

function OrderCard({order}) {
  console.log(order?.orderItem?.[0]?.product?.imageUrl)
  return (
    <div className="p-5 shadow-sm hover:shadow-2xl border shadow-black">
      <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object-cover object-top" src={order?.orderItem?.[0]?.product?.imageUrl} alt="" />
            <div className="ml-5 space-y-2">
              <p >{order?.orderItem?.[0]?.product?.title} </p>
              <p className="opacity-50 text-xs font-semibold">Size: {order?.orderItem?.[0]?.size}</p>
              <p className="opacity-50 text-xs font-semibold">Color: {order?.orderItem?.[0]?.product?.color}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>${order?.orderItem?.[0]?.product?.discountedPrice}</p>
        </Grid>
        <Grid item xs={4}>
          {true && <div>
            <p>
              <AdjustIcon sx={{ width: '15px', height: '15px' }} className="text-green-600 mr-2" />
              <span>{order?.orderStatus}</span>
            </p>
            <p className="text-xs">
              <span>Your Item Has Been Verified</span>
            </p>
          </div>
          }
          {false && <p>
            <span>Expected Delivery on Mar 03</span>
          </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCard;
