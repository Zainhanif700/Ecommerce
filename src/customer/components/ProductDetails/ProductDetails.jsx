import { useEffect, useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ProductReviewCard from './ProductReviewCard.jsx';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../State/Cart/Action.js';
import { findProductsById } from '../../../State/Product/Action.js';
import { toast } from 'react-toastify';

export default function ProductDetails() {
    const dispatch = useDispatch();
    const { product } = useSelector((store) => store);
    const navigate = useNavigate();
    const params = useParams();
    const jwt = localStorage?.getItem("jwt");
    
    const [selectedSize, setSelectedSize] = useState(null);
    const [loading, setLoading] = useState(true);
    const [addingToCart, setAddingToCart] = useState(false); // Track Add to Cart loading

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error("Please select a size");
            return;
        }

        setAddingToCart(true);

        const data = { productId: params.productId, size: selectedSize?.name };
        dispatch(addItemToCart(data)).then(() => {
            setAddingToCart(false);
            if (jwt) {
                navigate('/cart');
            } else {
                toast.error("Please Login First");
            }
        });
    };

    useEffect(() => {
        setLoading(true);
        const data = { productId: params.productId };
        dispatch(findProductsById(data)).then(() => setLoading(false));
    }, [params.productId, dispatch]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="bg-white lg:px-20">
            {loading ? (
                <div className="flex justify-center items-center h-[50vh]">
                    <CircularProgress />
                </div>
            ) : (
                <div className="pt-6">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li className="text-sm">
                                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    {product.name}
                                </a>
                            </li>
                        </ol>
                    </nav>

                    {/* Product Details */}
                    <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
                        {/* Image Gallery */}
                        <div className="flex flex-col items-center">
                            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                                <img
                                    alt="Image of Product"
                                    src={product.product?.imageUrl}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                            <div className="lg:col-span-2 ">
                                <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{product.product?.brand}</h1>
                                <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">{product.product?.title}</h1>
                            </div>

                            {/* Pricing */}
                            <div className="mt-4 lg:row-span-3 lg:mt-0">
                                <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                                    <p className='font-semibold'>{product.product?.discountedPrice}</p>
                                    <p className='opacity-50 line-through'>{product.product?.price}</p>
                                    <p className='text-green-600 font-semibold'>{product.product?.discountedPersent}%</p>
                                </div>

                                {/* Reviews */}
                                <div className="mt-6">
                                    <div className='flex items-center space-x-3'>
                                        <Rating name="read-only" value={4.5} readOnly />
                                        <p className='opacity-50 text-sm'>10 Ratings</p>
                                        <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-600'>5 Reviews</p>
                                    </div>
                                </div>

                                {/* Size Selection */}
                                <div className="mt-10">
                                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <RadioGroup
                                            value={selectedSize}
                                            onChange={setSelectedSize}
                                            className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                        >
                                            {product.product?.sizes?.map((size) => (
                                                <Radio
                                                    key={size.name}
                                                    value={size}
                                                    className={`group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase ${
                                                        selectedSize?.name === size.name
                                                            ? "bg-purple-500 text-white"
                                                            : "bg-white text-black"
                                                    }`}
                                                >
                                                    <span>{size.name}</span>
                                                </Radio>
                                            ))}
                                        </RadioGroup>
                                    </fieldset>

                                    {/* Show Selected Size */}
                                    {selectedSize && (
                                        <p className="mt-3 text-green-600 font-semibold">
                                            Selected Size: {selectedSize.name}
                                        </p>
                                    )}
                                </div>

                                {/* Add to Cart Button */}
                                <Button
                                    variant="contained"
                                    onClick={handleAddToCart}
                                    sx={{ px: '2rem', py: '1rem', mt: '2rem', bgcolor: '#9155fd' }}
                                    disabled={addingToCart} // Disable when loading
                                >
                                    {addingToCart ? <CircularProgress size={24} color="inherit" /> : "ADD TO CART"}
                                </Button>
                            </div>

                            {/* Description */}
                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                                <h3 className="sr-only">Description</h3>
                                <p className="text-base text-gray-900">{product.product?.description}</p>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}
