import Grid from "@mui/material/Grid";
import AdjustIcon from '@mui/icons-material/Adjust';

function OrderCard() {
  return (
    <div className="p-5 shadow-sm hover:shadow-2xl border shadow-black">
      <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70" alt="" />
            <div className="ml-5 space-y-2">
              <p >Men Slim Mid </p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$1999</p>
        </Grid>
        <Grid item xs={4}>
          {true && <div>
            <p>
              <AdjustIcon sx={{ width: '15px', height: '15px' }} className="text-green-600 mr-2" />
              <span>Delivered On March 03</span>
            </p>
            <p className="text-xs">
              <span>Your Item Has Been Velivered</span>
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
