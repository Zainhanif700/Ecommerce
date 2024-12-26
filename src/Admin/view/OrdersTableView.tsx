import { useEffect } from 'react'
import { Avatar, AvatarGroup, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../State/Admin/Order/Action.js';

function OrdersTableView() {
  const dispatch = useDispatch();
  const { adminOrder } = useSelector((state:any) => state);

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deletedOrders])

  return (
    <div >
      <Card className='mt-2 w-[100%]'>
        <CardHeader title='Recent Orders' />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.length > 0 && adminOrder?.orders?.slice(0,5)?.map((row:any, index:any) => (
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
          
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTableView
