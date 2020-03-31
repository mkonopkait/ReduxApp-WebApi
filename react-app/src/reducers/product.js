import { ACTION_TYPES } from "../actions/product";
const initialState = {
    list:[]
 }


/*export const product = (state=initialState, action) =>{
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return{
                ...state,
                list:[...state.list, action.payload]
            }
    
        default:
            return state;
    }
}*/

export const product = (state=initialState, action) =>{
    console.log("product state:", state)
    console.log("product action:", action)
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return{
                list:[...action.payload]
            }
        /*case ACTION_TYPES.ADD:
            return{
                invoiceList:[...state.invoiceList, action.addItem]
            }*/
    
        default:
            return state;
    }
}