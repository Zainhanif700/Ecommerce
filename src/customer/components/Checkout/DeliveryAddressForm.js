import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Grid from "@mui/material/Grid";
import AddressCard from "../AddressCard/AddressCard";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { createOrder } from '../../../State/Order/Action.js';
import { useNavigate } from "react-router-dom";
function DeliveryAddressForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
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
        dispatch(createOrder(orderData));
        console.log(address);
    };
    return (_jsxs(Grid, { container: true, spacing: 4, children: [_jsx(Grid, { xs: 12, lg: 5, className: "border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll", children: _jsxs("div", { className: "p-5 py-7 border-b cursor-pointer", children: [_jsx(AddressCard, {}), _jsx(Button, { sx: { mt: 2, bgcolor: 'RGB(145 85 253)' }, size: 'large', variant: "contained", children: "Deliver Here" })] }) }), _jsx(Grid, { item: true, xs: 12, lg: 7, children: _jsx(Box, { className: 'border rounded-s-md shadow-md p-5', children: _jsx("form", { onSubmit: handleSubmit, children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: "firstName", name: "firstName", label: 'First Name', fullWidth: true, autoComplete: "given-name" }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: "lastName", name: "lastName", label: 'Last Name', fullWidth: true, autoComplete: "given-name" }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { required: true, id: "address", name: "address", label: 'Address', multiline: true, rows: 4, fullWidth: true, autoComplete: "given-name" }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: "city", name: "city", label: 'City', fullWidth: true, autoComplete: "given-name" }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: "state", name: "state", label: 'State/Province/Region', fullWidth: true, autoComplete: "given-name" }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: "zipCode", name: "zipCode", label: 'Zip / Postal code', fullWidth: true, autoComplete: "shipping postal-code" }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: "phoneNumber", name: "phoneNumber", label: 'Phone Number', fullWidth: true, autoComplete: "given-name" }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Button, { sx: { py: 1, mt: 2, bgcolor: 'RGB(145 85 253)' }, type: 'submit', size: 'large', variant: "contained", children: "Deliver Here" }) })] }) }) }) })] }));
}
export default DeliveryAddressForm;
