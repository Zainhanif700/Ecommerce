import { Button, Grid, TextField } from '@mui/material'
import { useDispatch,  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login} from "../../State/Auth/Action.js";

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event:any) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            email: data.get("email"),
            password: data.get("password"),
        }
        dispatch(login(userData));
    }

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
                        <Button className='bg-[#9155FD] w-full' type='submit'
                            size='large' sx={{ color: 'white', padding: '0.8rem 0', bgcolor: '#9155FD' }}>
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='items-center flex-col justify-center flex'>
                <div className='items-center py-3 flex'>
                    <p>if you have donot have an account? </p>
                    <Button onClick={() => navigate('/register')} className='ml-5' size='small'>Register</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
