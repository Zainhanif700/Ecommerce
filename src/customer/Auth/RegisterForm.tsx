import { useEffect } from 'react';
import { Button, Grid, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, getUser } from "../../State/Auth/Action.js";

function RegisterForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector(store => store);

    useEffect(() => {
        if (jwt)
            dispatch(getUser(jwt));
    }, [jwt, auth.jwt])

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
        }
        dispatch(register(userData));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'
                        />

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='given-name'
                        />

                    </Grid>
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
                        <Button className='bg-[#9155FD] w-full' type='submit'
                            size='large' sx={{ color: 'white', padding: '0.8rem 0', bgcolor: '#9155FD' }}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='items-center flex-col justify-center flex'>
                <div className='items-center py-3 flex'>
                    <p>if you have already account? </p>
                    <Button onClick={() => navigate('/login')} className='ml-5' size='small'>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
