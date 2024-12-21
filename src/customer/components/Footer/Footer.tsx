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
                        <Button className='pb-5' variant="h6" gutterBottom>About</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Blog</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Press</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Jobs</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Partners</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Solutions</Typography>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Marketing</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Analytics</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Commerce</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Insights</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Support</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Documentation</Typography>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Guides</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Api Status</Button>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Claim</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Privacy</Button>
                    </Box>
                    <Box>
                        <Button className='pb-5' variant="h6" gutterBottom>Terms</Button>
                    </Box>
                </Grid>
                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 My Company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Icons made by{' '}
                        <Link href="https://www.freepik.com" color="inherit" underline="always">
                            Freepik
                        </Link>{' '}
                        from(' ')
                        <Link href="https://www.flaticon.com/" color="inherit" underline="always">
                            www.flaticon.com
                        </Link> </Typography>
                </Grid>
            </Grid>

        </>
    )
}

export default Footer
