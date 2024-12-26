import { CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

const initialState = {
    loading: false,
    error: null,
    orders: [],
}

export const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
        case SHIP_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
        case CONFIRMED_ORDER_REQUEST:
        case PLACED_ORDER_REQUEST:
        case DELIVERED_ORDER_REQUEST:
            return { ...state, loading: true, error: null };

        case GET_ORDERS_SUCCESS:
            return { ...state, loading: false, orders: action.payload, error: null }
        case CONFIRMED_ORDER_SUCCESS:
            return { ...state, loading: false, confirmed: action.payload, error: null }
        case PLACED_ORDER_SUCCESS:
            return { ...state, loading: false, placed: action.payload, error: null }
        case DELIVERED_ORDER_SUCCESS:
            return { ...state, loading: false, delivered: action.payload, error: null }
        case CANCELED_ORDER_SUCCESS:
            return {...state, loading: false, canceled: action.payload, error: null }
        case DELETE_ORDER_SUCCESS:
            return {...state,loading: false, deletedOrders: action.payload, error: null }
        case SHIP_ORDER_SUCCESS:
            return {...state,  loading: false, shipped: action.payload, error: null }

        case GET_ORDERS_FAILURE:
        case SHIP_ORDER_FAILURE:
        case DELETE_ORDER_FAILURE:
        case CONFIRMED_ORDER_FAILURE:
        case PLACED_ORDER_FAILURE:
        case DELIVERED_ORDER_FAILURE:
            return { ...state, loading: false, orders: [], error: action.payload }

        default:
            return state;
    }
}