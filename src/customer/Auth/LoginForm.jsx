import { useState } from 'react';
import { Button, Grid, TextField, CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from "../../State/Auth/Action.js";

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Show loading indicator

        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get("email"),
            password: data.get("password"),
        };

        await dispatch(login(userData));
        setLoading(false); // Hide loading indicator after request
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='email'
                            name='email'
                            label='Email'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='password'
                            name='password'
                            label='Password'
                            fullWidth
                            autoComplete='password'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button 
                            className='bg-[#9155FD] w-full' 
                            type='submit'
                            size='large' 
                            sx={{ color: 'white', padding: '0.8rem 0', bgcolor: '#9155FD' }}
                            disabled={loading} // Disable button when loading
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='items-center flex-col justify-center flex'>
                <div className='items-center py-3 flex'>
                    <p>Don't have an account?</p>
                    <Button onClick={() => navigate('/register')} className='ml-5' size='small'>Register</Button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
