import { useEffect, useState } from 'react'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders, shipOrder, confirmOrder, deliveredOrder, deleteOrder } from '../../State/Admin/Order/Action.js';

function OrdersTable() {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((store: any) => store);

  const [anchorEl, setAnchorEl] = useState(Array(adminOrder?.orders?.length).fill(null));

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrders])

  const handleClick = (event:any, index:any) => {
    const newAnchorElArray: any = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index:any) => {
    const newAnchorElArray: any = [...anchorEl];
    newAnchorElArray[index] = null
    setAnchorEl(newAnchorElArray);
  };

  const handleShippedOrder = (orderId:any, index:any) => {
    dispatch(shipOrder(orderId))
    handleClose(index);
  }

  const handleConfimedOrder = (orderId:any, index:any) => {
    dispatch(confirmOrder(orderId));
    handleClose(index);
  }

  const handleDeliveredOrder = (orderId:any, index:any) => {
    dispatch(deliveredOrder(orderId))
    handleClose(index);
  }

  const handleDeleteOrder = (orderId:any) => {
    dispatch(deleteOrder(orderId));
  }

  return (
    <div className='p-10'>
      <Card className='mt-2 w-[100%]'>
        <CardHeader title='All Products' />
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
              {adminOrder?.orders?.length > 0 && adminOrder?.orders?.map((row:any, index:any) => (
                <TableRow
                  key={row?.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup max={2} sx={{ justifyContent: 'start' }}>
                      {
                        row?.orderItem.map((item:any) =>
                          <Avatar src={`${item.product.imageUrl}`}></Avatar>
                        )}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left" scope="row">
                    {
                      row?.orderItem.map((item:any) =>
                        <p>{`${item?.product?.title}`}</p>
                      )}
                  </TableCell>
                  <TableCell align="left">{row?.id}</TableCell>
                  <TableCell align="left">{row?.totalPrice}</TableCell>
                  <TableCell align="left" >
                    <span className={`text-white px-5 rounded-full py-2 ${row.orderStatus == "CONFIRMED" ? "bg-[#369236]" : row.orderStatus == "SHIPPED" ? "bg-[#4141ff]" : row.orderStatus == "PLACED" ? "bg-[#02B290]" : row.orderStatus == "PENDING" ? "bg-[gray]" : "bg-[#025720]"}`}>
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
                        <MenuItem onClick={() => handleConfimedOrder(row.id, index)}>Confirmed Order</MenuItem>
                        <MenuItem onClick={() => handleShippedOrder(row.id, index)}>Shipped Order</MenuItem>
                        <MenuItem onClick={() => handleDeliveredOrder(row.id, index)}>Delivered Order</MenuItem>
                      </Menu>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      variant='outlined'
                      onClick={() => handleDeleteOrder(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTable
