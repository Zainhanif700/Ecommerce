import { jsx as _jsx } from "react/jsx-runtime";
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
];
function OrderTracker({ activeStep, label }) {
    useEffect(() => {
        console.log(label);
    }, []);
    return (_jsx("div", { className: "w-full", children: _jsx(Stepper, { activeStep: activeStep, children: steps.map((label1) => {
                const stepProps = {};
                const labelProps = {};
                return (_jsx(Step, Object.assign({}, stepProps, { children: _jsx(StepLabel, Object.assign({}, labelProps, { children: label1 })) }), label1));
            }) }) }));
}
export default OrderTracker;
