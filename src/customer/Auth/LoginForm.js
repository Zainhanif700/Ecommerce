import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Grid, TextField } from '@mui/material';
import { useDispatch, } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from "../../State/Auth/Action.js";
function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get("email"),
            password: data.get("password"),
        };
        dispatch(login(userData));
    };
    return (_jsxs("div", { children: [_jsx("form", { onSubmit: handleSubmit, children: _jsxs(Grid, { container: true, spacing: 3, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: 'email', name: 'email', label: 'Email', fullWidth: true, autoComplete: 'email' }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { required: true, id: 'password', name: 'password', label: 'Password', fullWidth: true, autoComplete: 'password' }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(Button, { className: 'bg-[#9155FD] w-full', type: 'submit', size: 'large', sx: { color: 'white', padding: '0.8rem 0', bgcolor: '#9155FD' }, children: "Login" }) })] }) }), _jsx("div", { className: 'items-center flex-col justify-center flex', children: _jsxs("div", { className: 'items-center py-3 flex', children: [_jsx("p", { children: "if you have donot have an account? " }), _jsx(Button, { onClick: () => navigate('/register'), className: 'ml-5', size: 'small', children: "Register" })] }) })] }));
}
export default LoginForm;
