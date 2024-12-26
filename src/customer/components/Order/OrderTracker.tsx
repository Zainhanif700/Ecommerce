import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Placed',
    'Order Confirmed',
    'Shipped',
    'Out For Delivery',
    'Delivered'
]

function OrderTracker({ activeStep, label }: { activeStep: any, label: any }) {
    return (
        <div className="w-full">
            <Stepper activeStep={activeStep}>
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
        </div>
    )
}
export default OrderTracker;
