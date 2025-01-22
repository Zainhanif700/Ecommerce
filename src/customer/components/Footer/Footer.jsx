/* MUI */

import { Box, Button, Link } from "@mui/material"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

const Footer = () => {

    return (
        <>
            <Grid className="bg-black text-white text-center mt-10" container sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <Box>
                        <Button className='pb-5' >About</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' >Blog</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' >Press</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' >Jobs</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' >Partners</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Solutions</Typography>
                    <Box>
                        <Button className='pb-5' >Marketing</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' >Analytics</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' >Commerce</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' >Insights</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' >Support</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Documentation</Typography>
                    <Box>
                        <Button className='pb-5' variant="text" >Guides</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="text" >Api Status</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <Box>
                        <Button className='pb-5' variant="text" >Claim</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="text" >Privacy</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="text" >Terms</Button>
                    </Box>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2025 My Company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made by Group 26.
                    </Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default Footer
