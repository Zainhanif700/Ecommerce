import { Button, Grid, TextField } from '@mui/material'
import { useDispatch,  } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { verify, resendEmail } from "../../State/Auth/Action.js";

function VerifyForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData = {
            email: localStorage.getItem('cloud-email'),
            verificationCode: data.get("code"),
        }
        dispatch(verify(userData, navigate));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='code'
                            name='code'
                            label='Code'
                            fullWidth
                            autoComplete='code'
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <Button className='bg-[#9155FD] w-full' type='submit'
                            size='large' sx={{ color: 'white', padding: '0.8rem 0', bgcolor: '#9155FD' }}>
                            Verify
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div className='items-center flex-col justify-center flex'>
                <div className='items-center py-3 flex'>
                    <p>Didnot receive the code?  </p>
                    <Button onClick={() => dispatch(resendEmail())} className='ml-5' size='small'>Resend</Button>
                </div>
            </div>
        </div>
    )
}

export default VerifyForm
