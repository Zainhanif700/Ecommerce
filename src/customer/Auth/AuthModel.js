import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Modal } from '@mui/material';
import RegisterForm from './RegisterForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline: 'none',
    p: 4,
};
function AuthModal({ handleClose, open }) {
    const location = useLocation();
    return (_jsx("div", { children: _jsx(Modal, { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description", children: _jsx(Box, { sx: style, children: location.pathname === "/login" ? _jsx(LoginForm, {}) : _jsx(RegisterForm, {}) }) }) }));
}
export default AuthModal;
