import { useEffect, useState } from 'react';
import {
  Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow, CircularProgress
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders, shipOrder, confirmOrder, deliveredOrder, deleteOrder } from '../../State/Admin/Order/Action.js';

function OrdersTable() {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store) => store);
  
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState([]);

  useEffect(() => {
    setLoading(true);
    dispatch(getOrders()).then(() => setLoading(false));
  }, [dispatch, adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrders]);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const handleShippedOrder = (orderId, index) => {
    dispatch(shipOrder(orderId));
    handleClose(index);
  };

  const handleConfimedOrder = (orderId, index) => {
    dispatch(confirmOrder(orderId));
    handleClose(index);
  };

  const handleDeliveredOrder = (orderId, index) => {
    dispatch(deliveredOrder(orderId));
    handleClose(index);
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div className='p-10'>
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <CircularProgress />
        </div>
      ) : (
        <Card className='mt-2 w-[100%]'>
          <CardHeader title='All Orders' />
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Id</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Update</TableCell>
                  <TableCell align="left">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {adminOrder?.orders?.length > 0 ? adminOrder.orders.map((row, index) => (
                  <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">
                      <AvatarGroup max={2} sx={{ justifyContent: 'start' }}>
                        {row?.orderItem.map((item) => (
                          <Avatar key={item.product.id} src={item.product.imageUrl}></Avatar>
                        ))}
                      </AvatarGroup>
                    </TableCell>
                    <TableCell align="left">
                      {row?.orderItem.map((item) => (
                        <p key={item.product.id}>{item?.product?.title}</p>
                      ))}
                    </TableCell>
                    <TableCell align="left">{row?.id}</TableCell>
                    <TableCell align="left">${row?.totalPrice}</TableCell>
                    <TableCell align="left">
                      <span className={`text-white px-5 rounded-full py-2 ${row.orderStatus === "CONFIRMED" ? "bg-[#369236]" : row.orderStatus === "SHIPPED" ? "bg-[#4141ff]" : row.orderStatus === "PLACED" ? "bg-[#02B290]" : row.orderStatus === "PENDING" ? "bg-[gray]" : "bg-[#025720]"}`}>
                        {row?.orderStatus}
                      </span>
                    </TableCell>
                    <TableCell align="left">
                      <div>
                        <Button
                          id="basic-button"
                          aria-haspopup="true"
                          onClick={(e) => handleClick(e, index)}
                          aria-controls={`basic-menu-${row.id}`}
                          aria-expanded={Boolean(anchorEl?.[index])}
                        >
                          Status
                        </Button>
                        <Menu
                          id={`basic-menu-${row.id}`}
                          anchorEl={anchorEl[index]}
                          open={Boolean(anchorEl[index])}
                          onClose={() => handleClose(index)}
                          MenuListProps={{
                            'aria-labelledby': 'basic-button',
                          }}
                        >
                          <MenuItem onClick={() => handleConfimedOrder(row.id, index)}>Confirm Order</MenuItem>
                          <MenuItem onClick={() => handleShippedOrder(row.id, index)}>Ship Order</MenuItem>
                          <MenuItem onClick={() => handleDeliveredOrder(row.id, index)}>Deliver Order</MenuItem>
                        </Menu>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <Button variant='outlined' onClick={() => handleDeleteOrder(row.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={7} align="center">No Orders Found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      )}
    </div>
  );
}

export default OrdersTable;
