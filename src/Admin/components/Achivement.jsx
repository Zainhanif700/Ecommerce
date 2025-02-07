import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import Img from '../../../public/trophy.jpg';
import { useNavigate } from 'react-router-dom';

const TriangleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute',
})

const TropyImg = styled('img')({
    right: 36,
    height: 98,
    botto4: 20,
    position: 'absolute'
})

function Achivement() {
    
    const navigate = useNavigate();

    return (
        <Card className='space-y-5' sx={{ position: 'relative',}}>
            <CardContent>
                <Typography variant='h6' sx={{letterSpacing:'.25px'}}>
                    Shop With Us
                </Typography>
                <Typography  variant='body2'>
                    Congratulations 
                </Typography>
                <Typography variant='h5' sx={{my:3.1}}>
                    10 Sales
                </Typography>
                <Button size='small' variant='contained' onClick={()=>navigate(`/admin/orders`)}>View Sales</Button>
                <TriangleImg src={Img}></TriangleImg>
                <TropyImg src='' />
            </CardContent>
        </Card>
    )
}

export default Achivement
