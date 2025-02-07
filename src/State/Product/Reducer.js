import {
    CREATE_PRODUCT_FAILURE, FIND_PRODUCT_BY_DECORATION_REQUEST, FIND_PRODUCT_BY_DECORATION_FAILURE,
    FIND_PRODUCT_BY_DECORATION_SUCCESS, FIND_PRODUCT_BY_BRANDS_REQUEST, FIND_PRODUCT_BY_BRANDS_FAILURE,
    FIND_PRODUCT_BY_BRANDS_SUCCESS, FIND_PRODUCT_BY_FURNITURE_REQUEST, FIND_PRODUCT_BY_FURNITURE_SUCCESS,
    FIND_PRODUCT_BY_FURNITURE_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS
} from "./ActionType"

const initialState = {
    products: [],
    productsByFurniture: [],
    productsByDecoration: [],
    productsByBrands: [],
    product: null,
    isLoading: false,
    error: null,
}

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case FIND_PRODUCT_BY_BRANDS_REQUEST:
        case FIND_PRODUCT_BY_FURNITURE_REQUEST:
        case FIND_PRODUCT_BY_DECORATION_REQUEST:
        case CREATE_PRODUCT_REQUEST:
            return { ...state, isLoading: true, error: null }

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, error: null, products: action.payload }
        case FIND_PRODUCT_BY_DECORATION_SUCCESS:
            return { ...state, isLoading: false, error: null, productsByDecoration: action.payload }
        case FIND_PRODUCT_BY_FURNITURE_SUCCESS:
            return { ...state, isLoading: false, error: null, productsByFurniture: action.payload }
        case FIND_PRODUCT_BY_BRANDS_SUCCESS:
            return { ...state, isLoading: false, error: null, productsByBrands: action.payload }
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, isLoading: false, error: null, product: action.payload }

        case DELETE_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, error: null, deletedProduct: action.payload }

        case FIND_PRODUCTS_FAILURE:
        case DELETE_PRODUCT_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case FIND_PRODUCT_BY_BRANDS_FAILURE:
        case FIND_PRODUCT_BY_FURNITURE_FAILURE:
        case FIND_PRODUCT_BY_DECORATION_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        default:
            return state;
    }
}