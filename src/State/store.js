import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { cartReducer } from './Cart/Reducer';
import { authReducer } from './Auth/Reducer';
import { orderReducer } from './Order/Reducer';
import { customerProductReducer } from './Product/Reducer';
import { adminOrderReducer } from './Admin/Order/Reducer';

const rootReducers = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    product: customerProductReducer,
    adminOrder: adminOrderReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
