import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../State/Product/Action.js';
import {
  Button, FormControl, Grid, InputLabel, MenuItem, Select,
  TextField, Typography, CircularProgress
} from '@mui/material';

const initialSizes = [
  { name: 'S', quantity: 0 },
  { name: 'M', quantity: 0 },
  { name: 'L', quantity: 0 },
];

function CreateProductForm() {
  const [productData, setProductData] = useState({
    imageUrl: '',
    brand: '',
    title: '',
    color: '',
    discountedPrice: '',
    price: '',
    discountPersent: '',
    size: initialSizes,
    quantity: '',
    topLavelCategory: 'Furniture',
    secondLavelCategory: 'Home',
    thirdLavelCategory: '',
    description: '',
  });

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name = name === 'size_quantity' ? 'quantity' : e.target.name;
    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const formData = new FormData();
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    Object.keys(productData).forEach((key) => {
      if (key === 'size') {
        formData.append(key, JSON.stringify(productData[key]));
      } else {
        formData.append(key, productData[key]);
      }
    });

    try {
      await dispatch(createProduct(formData));
      setProductData({
        imageUrl: '',
        brand: '',
        title: '',
        color: '',
        discountedPrice: '',
        price: '',
        discountPersent: '',
        size: initialSizes,
        quantity: '',
        topLavelCategory: 'Furniture',
        secondLavelCategory: 'Home',
        thirdLavelCategory: '',
        description: '',
      })
      selectedImage(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Product creation failed:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="p-10">
      <Typography variant="h3" sx={{ textAlign: 'center' }} className="py-10 text-center">
        Add New Product
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input type="file" accept="image/*" onChange={handleFileChange} fullWidth />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" style={{ width: '100%', maxWidth: '400px', marginTop: '10px' }} />
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Brand" name="brand" value={productData.brand} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Title" name="title" value={productData.title} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Color" name="color" value={productData.color} onChange={handleChange} />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Quantity" name="quantity" value={productData.quantity} onChange={handleChange} type="number" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Price" name="price" value={productData.price} onChange={handleChange} type="number" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Discounted Price" name="discountedPrice" value={productData.discountedPrice} onChange={handleChange} type="number" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Discount Percentage" name="discountPersent" value={productData.discountPersent} onChange={handleChange} type="number" />
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel>Select Category</InputLabel>
              <Select
                name='thirdLavelCategory'
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label='Third Level Category'
              >
                <MenuItem value="Lamps">Lamps</MenuItem>
                <MenuItem value="Wall Art">Wall Art</MenuItem>
                <MenuItem value="Mirrors">Mirrors</MenuItem>
                <MenuItem value="Cushions">Cushions</MenuItem>
                <MenuItem value="Sofas">Sofas</MenuItem>
                <MenuItem value="Tables">Tables</MenuItem>
                <MenuItem value="Rugs">Rugs</MenuItem>
                <MenuItem value="Modern Houses">Modern Houses</MenuItem>
                <MenuItem value="EcoStyle">EcoStyle</MenuItem>
                <MenuItem value="Rustic Charm">Rustic Charm</MenuItem>
                <MenuItem value="Chairs">Chairs</MenuItem>
                <MenuItem value="Beds">Beds</MenuItem>
                <MenuItem value="Urban Living">Urban Living</MenuItem>
                <MenuItem value="Cabinets">Cabinets</MenuItem>
                <MenuItem value="Outdoor Furniture">Outdoor Furniture</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Description" multiline rows={3} name="description" value={productData.description} onChange={handleChange} />
          </Grid>

          {productData?.size?.map((size, index) => (
            <Grid container item spacing={3} key={index}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Size Name" name="name" value={size.name} onChange={(event) => handleSizeChange(event, index)} required />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Quantity" name="size_quantity" type="number" value={size.quantity} onChange={(event) => handleSizeChange(event, index)} required />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button variant="contained" sx={{ p: 1.8 }} size="large" type="submit" disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Add New Product'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreateProductForm;
