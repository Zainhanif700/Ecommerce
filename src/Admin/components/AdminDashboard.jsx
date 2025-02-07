import { Grid, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import Achivement from './Achivement';
import MonthlyOverview from './MonthlyOverview';
import OrdersTableView from '../view/OrdersTableView';
import ProductTableView from '../view/ProductTableView';

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust timing if necessary
  }, []);

  return (
    <div className='p-10'>
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div className='shadow-lg shadow-gray-600'>
              <Achivement />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className='shadow-lg shadow-gray-600'>
              <MonthlyOverview />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='shadow-lg shadow-gray-600'>
              <OrdersTableView />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='shadow-lg shadow-gray-600'>
              <ProductTableView />
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default AdminDashboard;
