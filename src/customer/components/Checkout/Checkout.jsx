import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';
import { useSelector } from 'react-redux';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  const tempStep = querySearch.get('step');
  const step = tempStep !== null ? parseInt(tempStep, 10)-1 : undefined;

  return (
    <div className='px-10 lg:px-20'>
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={step}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {0 === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="mt-10">
            {step==1 && <DeliveryAddressForm/> }
            {step==2 && <OrderSummary/> }
          </div>
        </React.Fragment>
      )}
    </Box>
    </div>
  );
}
