import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, getUser } from "../../State/Auth/Action.js";
function RegisterForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector((store) => store);
    useEffect(() => {
        if (jwt)
            dispatch(getUser(jwt));
    }, [jwt, auth.jwt]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
        };
        dispatch(register(userData));
    };
    return (_jsxs("div", { children: [_jsx("form", { onSubmit: handleSubmit, children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: 'firstName', name: 'firstName', label: 'First Name', fullWidth: true, autoComplete: 'given-name' }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: 'lastName', name: 'lastName', label: 'Last Name', fullWidth: true, autoComplete: 'given-name' }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: 'email', name: 'email', label: 'Email', fullWidth: true, autoComplete: 'email' }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: 'password', name: 'password', label: 'Password', fullWidth: true, autoComplete: 'password' }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Button, { className: 'bg-[#9155FD] w-full', type: 'submit', size: 'large', sx: { color: 'white', padding: '0.8rem 0', bgcolor: '#9155FD' }, children: "Register" }) })] }) }), _jsx("div", { className: 'items-center flex-col justify-center flex', children: _jsxs("div", { className: 'items-center py-3 flex', children: [_jsx("p", { children: "if you have already account? " }), _jsx(Button, { onClick: () => navigate('/login'), className: 'ml-5', size: 'small', children: "Login" })] }) })] }));
}
export default RegisterForm;
