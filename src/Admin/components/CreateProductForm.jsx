import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../State/Product/Action.js'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const initialSizes = [
  { name: 'S', quantity: 0 },
  { name: 'M', quantity: 0 },
  { name: 'L', quantity: 0 },
]

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
    topLavelCategory: '',
    secondLavelCategory: '',
    thirdLavelCategory: '',
    description: ''

  })

  const dispatch = useDispatch();

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
      [name]: value
    }))
  }

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name = name === "size_quantity" ? 'quantity' : e.target.name;
    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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

    dispatch(createProduct(formData));
  }

  return (
    <div className='p-10'>
      <Typography
        variant='h3'
        sx={{ textAlign: 'center' }}
        className='py-10 text-center'
      >
        Add New Product
      </Typography>

      <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              fullWidth
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ width: "100%", maxWidth: "400px", marginTop: "10px" }}
              />
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Brand'
              name='brand'
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Title'
              name='title'
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Color'
              name='color'
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label='Quantity'
              name='quantity'
              value={productData.quantity}
              onChange={handleChange}
              type='number'
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label='Price'
              name='price'
              value={productData.price}
              onChange={handleChange}
              type='number'
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label='Discounted Price'
              name='discountedPrice'
              value={productData.discountedPrice}
              onChange={handleChange}
              type='number'
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label='Discounted Percentage'
              name='discountPersent'
              value={productData.discountPersent}
              onChange={handleChange}
              type='number'
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name='topLavelCategory'
                value={productData.topLavelCategory}
                onChange={handleChange}
                label='Top Level Category'
              >
                <MenuItem value="men">Men</MenuItem>
                <MenuItem value="women">Women</MenuItem>
                <MenuItem value="kids">Kids</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name='secondLavelCategory'
                value={productData.secondLavelCategory}
                onChange={handleChange}
                label='Second Level Category'
              >
                <MenuItem value="clothing">Clothing</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
                <MenuItem value="brands">Brands</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Third Level Category</InputLabel>
              <Select
                name='thirdLavelCategory'
                value={productData.thirdLavelCategory}
                onChange={handleChange}
                label='Third Level Category'
              >
                <MenuItem value="Modern Home">Modern Home</MenuItem>
                <MenuItem value="Rustic Charm">Rustic Charm</MenuItem>
                <MenuItem value="Urban Living">Urban Living</MenuItem>
                <MenuItem value="EcoStyle">EcoStyle</MenuItem>
                <MenuItem value="Rugs">Rugs</MenuItem>
                <MenuItem value="Lamps">Lamps</MenuItem>
                <MenuItem value="Wall Art">Wall Art</MenuItem>
                <MenuItem value="Mirrors">Mirrors</MenuItem>
                <MenuItem value="Cushions">Cushions</MenuItem>
                <MenuItem value="Sofas">Sofas</MenuItem>
                <MenuItem value="Chairs">Chairs</MenuItem>
                <MenuItem value="Beds">Beds</MenuItem>
                <MenuItem value="Cabinets">Cabinets</MenuItem>
                <MenuItem value="Outdoor Furniture">Outdoor Furniture</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id='outlined-multiline-static'
              label='Description'
              multiline
              rows={3}
              name='description'
              value={productData.description}
              onChange={handleChange}
            />
          </Grid>

          {productData?.size?.map((size, index) => (
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Size Name'
                  name='name'
                  value={size.name}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Quantity'
                  name='size_quantity'
                  type='number'
                  value={size.quantity}
                  onChange={(event) => handleSizeChange(event, index)}
                  required
                />
              </Grid>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button
              variant='contained'
              sx={{ p: 1.8 }}
              className='py-20'
              size='large'
              type='submit'
            >
              Add New Product
            </Button>

          </Grid>
        </Grid>
      </form>

    </div>
  )
}

export default CreateProductForm
