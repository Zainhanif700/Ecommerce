import { Box, Modal } from '@mui/material';
import RegisterForm from './RegisterForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import VerifyForm from './VerifyForm';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

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
    const { auth } = useSelector((store) => store);

    // Close modal when user is logged in
    useEffect(() => {
        if (auth?.user) {
            handleClose();
        }
    }, [auth?.user, handleClose]);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {location.pathname === "/login" || location.pathname === "/"
                        ? <LoginForm handleClose={handleClose} />
                        : location.pathname === "/verify"
                        ? <VerifyForm />
                        : <RegisterForm />}
                </Box>
            </Modal>
        </div>
    );
}

export default AuthModal;
