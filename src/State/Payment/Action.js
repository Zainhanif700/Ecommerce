import axios from "axios"
import { api } from "../../config/apiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType"

export const createPayment = (orderId, reqData) => async (dispatch) => {
    dispatch({ type: CREATE_PAYMENT_REQUEST});
    try {
        const { data } = await api.post(`/api/payment/${orderId}`, reqData)
        if (data.sessionUrl){
            window.location.href = data.sessionUrl;
        }
    }
    catch (error) {
        console.log(error)
        dispatch({type:CREATE_PAYMENT_FAILURE, payload:error.message})
    }
}

export const updatePayment = (reqData) => async (dispatch) => {
    dispatch({ type: UPDATE_PAYMENT_REQUEST});
    try {
        const { data } = await api.get(`/api/?payment_id=${reqData.orderId}&order_id=${reqData.orderId}`)
    }
    catch (error) {
        dispatch({type:UPDATE_PAYMENT_FAILURE, payload:error.message})
    }
}
