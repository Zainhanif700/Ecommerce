import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';

const saleData = [
  {
    stats: '24',
    title:'Sales',
    color:'#E8BD0D',
    icon: <TrendingUpIcon sx={{fontSize:'1.75rem'}}/>
  },
  {
    stats: '12.5',
    title:'Customers',
    color:'#22CB5C',
    icon: <AccountCircleIcon sx={{fontSize:'1.75rem'}}/>
  },
  {
    stats: '1.54',
    title:'Products',
    color:'#DE4839',
    icon: <SettingsCellIcon sx={{fontSize:'1.75rem'}}/>
  },
  {
    stats: '88',
    title:'Revenue',
    color:'#12B0E8',
    icon: <AttachMoneyIcon sx={{fontSize:'1.75rem'}}/>
  }
]

const renderStats = ()=>{
  return saleData.map((item, index) =>(
    <Grid xs={12} sm={3} key={index}>
        <Box sx={{display:'flex', alignItems:'center'}}>
          <Avatar variant='rounded' sx={{
            width:44,
            height:44,
            mr:3,
            color:'white',
            boxShadow:3,
            backgroundColor:`${item.color}`
          }}>
            {item.icon}
          </Avatar>
          <Box sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant='caption'>
              {item.title}
            </Typography>
            <Typography variant='h6'>
              {item.stats}
            </Typography>
          </Box>
        </Box>
    </Grid>
  ))
}

function MonthlyOverview() {
  return (
    <Card>
        <CardHeader title='Monthly Overview' action={
          <IconButton size='small' >
            <MoreVertIcon/>
            </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component="span" sx={{fontWeight:600, paddingRight:"1px" }}>
                Total 18.5% growth 
            </Box>
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx:{
            mb:2.5,
            lineHeight:'2rem !important',
            letterspacing:'.15px !important'
          }
        }}
        />
        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
          <Grid container spacing={[5,0]}>
            {renderStats()}
          </Grid>
        </CardContent>

    </Card>
  )
}

export default MonthlyOverview
