import { combineReducers } from "redux";
import { product } from "./product";
import { invoiceProduct } from "./invoiceProduct";

export const reducers = combineReducers({
    product,
    invoiceProduct
})