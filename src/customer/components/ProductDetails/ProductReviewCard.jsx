/* Component */

import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Rating from "@mui/material/Rating"

const ProductReviewCard = () => {

    return (
        <>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{ width: 56, height: 56, bgcolor: '#9155fd' }}></Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p className="font-semibold text-lg">Raam</p>
                            <p className="opacity-70">April 5, 2023</p>
                        </div>
                    </div>
                    <Rating value={4.5} name='half-rating' precision={0.5} readOnly></Rating>
                    <p >Lorem ipsum dolor sit amet </p>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductReviewCard
