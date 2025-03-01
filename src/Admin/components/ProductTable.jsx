import { useEffect, useState } from 'react';
import {
  Avatar, Button, Card, CardHeader, Paper, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, CircularProgress
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts, deleteProductsById } from '../../State/Product/Action.js';

const ProductTable = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state);

  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true);
    const data = {
      category: 'all',
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 1000000,
      minDiscount: 0,
      sort: 'price_low',
      pageNumber: 0,
      pageSize: 20,
      stock: "",
    };
    dispatch(findProducts(data)).then(() => setLoading(false));
  }, [dispatch, product.deletedProduct]);

  const handleProductDelete = (data) => {
    dispatch(deleteProductsById(data));
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-[50vh]">
          <CircularProgress />
        </div>
      ) : (
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
                  <TableRow key={row?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">
                      <Avatar src={`${row.imageUrl}`} />
                    </TableCell>
                    <TableCell align="left">{row?.title}</TableCell>
                    <TableCell align="left">{row?.category?.name}</TableCell>
                    <TableCell align="left">${row?.price}</TableCell>
                    <TableCell align="left">{row?.quantity}</TableCell>
                    <TableCell align="left">
                      <Button variant='outlined' onClick={() => handleProductDelete(row.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {product.products?.content?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} align="center">No Products Found</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      )}
    </div>
  );
};

export default ProductTable;
