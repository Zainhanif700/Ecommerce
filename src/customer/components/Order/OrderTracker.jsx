import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useEffect } from 'react';

const steps = [
    'Placed',
    'Order Confirmed',
    'Shipped',
    'Out For Delivery',
    'Delivered'
]

function OrderTracker({ activeStep, label }) {
    
    useEffect(()=>{
        console.log(label);
    },[])

    return (
        <div className="w-full">
            <Stepper activeStep={activeStep}>
                {steps.map((label1) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label1} {...stepProps}>
                            <StepLabel {...labelProps}>{label1}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </div>
    )
}
export default OrderTracker;
