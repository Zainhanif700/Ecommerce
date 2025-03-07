import axios from "axios"
import { api } from "../../config/apiConfig"
import { apiForm } from "../../config/apiConfig"
import { CREATE_PRODUCT_FAILURE, FIND_PRODUCT_BY_DECORATION_REQUEST, FIND_PRODUCT_BY_DECORATION_FAILURE, 
    FIND_PRODUCT_BY_DECORATION_SUCCESS, FIND_PRODUCT_BY_BRANDS_REQUEST, FIND_PRODUCT_BY_BRANDS_FAILURE, 
    FIND_PRODUCT_BY_BRANDS_SUCCESS, FIND_PRODUCT_BY_FURNITURE_REQUEST, FIND_PRODUCT_BY_FURNITURE_SUCCESS, 
    FIND_PRODUCT_BY_FURNITURE_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, 
    DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, 
    FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"
import { toast } from "react-toastify"

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
        const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data })
        console.log(data)
    }
    catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message })
    }
}

export const findProductsByFurniture = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_FURNITURE_REQUEST });
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
        const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        dispatch({ type: FIND_PRODUCT_BY_FURNITURE_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_FURNITURE_FAILURE, payload: error.message })
    }
}

export const findProductsByBrands = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_BRANDS_REQUEST });
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
        const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        dispatch({ type: FIND_PRODUCT_BY_BRANDS_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_BRANDS_FAILURE, payload: error.message })
    }
}

export const findProductsByDecoration = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_DECORATION_REQUEST });
    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
        const { data } = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        dispatch({ type: FIND_PRODUCT_BY_DECORATION_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_DECORATION_FAILURE, payload: error.message })
    }
}


export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
    const { productId } = reqData;
    try {
        const { data } = await api.get(`/api/products/id/${productId}`)
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data })
    }
    catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message })
    }
}


export const deleteProductsById = (productId) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    try {
        const { data } = await api.delete(`/api/admin/products/${productId}/delete`)
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId })
    }
    catch (error) {
        dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message })
    }
}


export const createProduct = (product) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
    try {
        const { data } = await apiForm.post(`/api/admin/products/`, product)
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data })
        toast.success("Product Added Successfully");
    }
    catch (error) {
        dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message })
        toast.error("Something Went Wrong");
    }
}


