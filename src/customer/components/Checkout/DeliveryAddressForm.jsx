import { useState } from "react";
import Grid from "@mui/material/Grid";
import AddressCard from "../AddressCard/AddressCard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { createOrder } from '../../../State/Order/Action.js';
import { useNavigate } from "react-router-dom";

function DeliveryAddressForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      streetAddress: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zipCode: data.get('zipCode'),
      mobile: data.get('phoneNumber'),
    };

    const orderData = { address, navigate };
    
    try {
      await dispatch(createOrder(orderData));
    } catch (error) {
      console.error("Order submission failed:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={7}>
        <Box className='border rounded-s-md shadow-md p-5'>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField required id="firstName" name="firstName" label='First Name' fullWidth autoComplete="given-firstname" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="lastName" name="lastName" label='Last Name' fullWidth autoComplete="given-lastname" />
              </Grid>
              <Grid item xs={12}>
                <TextField required id="address" name="address" label='Address' multiline rows={4} fullWidth autoComplete="given-address" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="city" name="city" label='City' fullWidth autoComplete="given-city" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="state" name="state" label='State/Province/Region' fullWidth autoComplete="given-state" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="zipCode" name="zipCode" label='Zip / Postal code' fullWidth autoComplete="shipping postal-code" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="phoneNumber" name="phoneNumber" label='Phone Number' fullWidth autoComplete="given-name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  sx={{ py: 1, mt: 2, bgcolor: 'RGB(145 85 253)' }}
                  type='submit'
                  size='large'
                  variant="contained"
                  disabled={loading} // Disable button while loading
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : "Deliver Here"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default DeliveryAddressForm;
