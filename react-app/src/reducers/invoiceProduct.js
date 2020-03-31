import { ACTION_TYPES } from "../actions/invoiceProduct";
const initialState ={
    invoiceList:[],
    currentItem:{
        productId: "",
        name: "",
        price: ""
    }
}

export const invoiceProduct = (state=initialState, action) =>{
    console.log("invoiceProduct state:", state)
    console.log("invoiceProduct action:", action)
    switch (action.type) {
        /*case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                invoiceList:[action.payload]
            }*/
        case ACTION_TYPES.ADD_INVOICE_PRODUCT:
            return{
                ...state,
                invoiceList:[...state.invoiceList, action.payload]
            }
    
        default:
            return state;
    }
}