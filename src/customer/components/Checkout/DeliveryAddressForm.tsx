import Grid from "@mui/material/Grid";
import AddressCard from "../AddressCard/AddressCard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function DeliveryAddressForm() {

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      streetAddress: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zipCode: data.get('zipCode'),
      phoneNumber: data.get('phoneNumber'),
    }
    console.log(address)
  }

  return (
    <Grid container spacing={4}>
      <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
        <div className="p-5 py-7 border-b cursor-pointer">
          <AddressCard />
          <Button sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }} size='large' variant="contained">
            Deliver Here
          </Button>
        </div>
      </Grid>

      <Grid item xs={12} lg={7}>
        <Box className='border rounded-s-md shadow-md p-5'>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField required id="firstName" name="firstName" label='First Name' fullWidth autoComplete="given-name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="lastName" name="lastName" label='Last Name' fullWidth autoComplete="given-name" />
              </Grid>
              <Grid item xs={12}>
                <TextField required id="address" name="address" label='Address' multiline rows={4} fullWidth autoComplete="given-name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="city" name="city" label='City' fullWidth autoComplete="given-name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="state" name="state" label='State/Province/Region' fullWidth autoComplete="given-name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="zip" name="zip" label='Zip / Postal code' fullWidth autoComplete="shipping postal-code" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required id="phoneNumber" name="phoneNumber" label='Phone Number' fullWidth autoComplete="given-name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button sx={{ py: 1, mt: 2, bgcolor: 'RGB(145 85 253)' }} type='submit' size='large' variant="contained">
                  Deliver Here
                </Button>
              </Grid>

            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default DeliveryAddressForm;
