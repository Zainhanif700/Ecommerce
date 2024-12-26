import { Avatar, Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts, deleteProductsById } from '../../State/Product/Action.js';

const ProductTable = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000,
      minDiscount: 0,
      sort: 'price_low',
      pageNumber: 0,
      pageSize: 20,
      stock: "",
    }
    dispatch(findProducts(data))
  }, [product.deletedProduct])


  const handleProductDelete = (data) =>{
    dispatch(deleteProductsById(data));
  }

  return (
    <div >
      <Card className='mt-2 w-[100%]'>
        <CardHeader title='All Products' />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.products?.content?.map((row) => (
                <TableRow
                  key={row?.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left"><Avatar src={`${row.imageUrl}`}></Avatar></TableCell>
                  <TableCell align="left" scope="row">
                    {row?.title}
                  </TableCell>
                  <TableCell align="left">{row?.category?.name}</TableCell>
                  <TableCell align="left">{row?.price}</TableCell>
                  <TableCell align="left">{row?.quantity}</TableCell>
                  <TableCell align="left">
                    <Button variant='outlined' onClick={()=>handleProductDelete(row.id)}>
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

export default ProductTable
