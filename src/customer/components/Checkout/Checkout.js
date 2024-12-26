import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';
const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];
export default function Checkout() {
    const location = useLocation();
    const querySearch = new URLSearchParams(location.search);
    const tempStep = querySearch.get('step');
    const step = tempStep !== null ? parseInt(tempStep, 10) - 1 : undefined;
    return (_jsx("div", { className: 'px-10 lg:px-20', children: _jsxs(Box, { sx: { width: '100%' }, children: [_jsx(Stepper, { activeStep: step, children: steps.map((label) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (_jsx(Step, Object.assign({}, stepProps, { children: _jsx(StepLabel, Object.assign({}, labelProps, { children: label })) }), label));
                    }) }), 0 === steps.length ? (_jsx(React.Fragment, { children: _jsx(Typography, { sx: { mt: 2, mb: 1 }, children: "All steps completed - you're finished" }) })) : (_jsx(React.Fragment, { children: _jsxs("div", { className: "mt-10", children: [step == 1 && _jsx(DeliveryAddressForm, {}), step == 2 && _jsx(OrderSummary, {})] }) }))] }) }));
}
