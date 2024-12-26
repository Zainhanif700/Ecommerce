import { Grid } from '@mui/material'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import OrdersTableView from '../view/OrdersTableView'
import ProductTableView from '../view/ProductTableView'

const AdminDashboard = () => {

  return (
    <div className='p-10'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className='shadow-lg shadow-gray-600' >
            <Achivement />
          </div>
        </Grid>
        <Grid  item xs={12} md={8}>
          <div className='shadow-lg shadow-gray-600' >
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid  item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
            <OrdersTableView />
          </div>
        </Grid>
        <Grid  item xs={12} md={6}>
          <div className='shadow-lg shadow-gray-600'>
            <ProductTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminDashboard
