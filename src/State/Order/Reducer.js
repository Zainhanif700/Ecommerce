import {
    CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS,
    GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_FAILURE, GET_ORDER_SUCCESS, GET_ORDER_REQUEST
} from "./ActionType";

const initialState = {
    order: null,
    loading: false,
    error: null,
    orders: [],
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
        case GET_ORDER_BY_ID_REQUEST:
        case GET_ORDER_REQUEST:
            return { ...state, loading: true, error: null };

        case CREATE_ORDER_SUCCESS:
            return { ...state, loading: false, success: true, error: null, order: action.payload }
        case GET_ORDER_BY_ID_SUCCESS:
        case GET_ORDER_SUCCESS:
            return { ...state, loading: false, orders: action.payload, error: null }

        case CREATE_ORDER_FAILURE:
        case GET_ORDER_BY_ID_FAILURE:
        case GET_ORDER_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}