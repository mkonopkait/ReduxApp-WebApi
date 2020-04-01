import { ACTION_TYPES } from "../actions/invoiceProduct";
const initialState ={
    invoiceList:[],
    currentItem:{
        productId: "",
        name: "",
        price: ""
    },
    seller:{
        type: 'seller',
        companyName: '',
        nip: '',
        address: '',
        zipCode: '',
        place: '',
        locality: ''
    },
    purchaser:{
        type: 'purchaser',
        companyName: '',
        nip: '',
        address: '',
        zipCode: '',
        place: '',
        locality: ''
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
            const newItem ={
                productId: action.payload.productId,
                name: action.payload.name,
                price: action.payload.price
            }
                if(state.invoiceList.find(x => x.productId == action.payload.productId) == undefined)
                return{
                    ...state,
                    invoiceList:[...state.invoiceList, newItem]
                    //invoiceList:[state.invoiceList.filter(x => x.productId == action.payload.productId) == false ? [...state.invoiceList, newItem] : state.invoiceList]
                    
                }
        case ACTION_TYPES.DELETE_INVOICE_PRODUCT:
            console.log("id", action.payload)
            return{
                ...state,
                invoiceList: state.invoiceList.filter(x => x.productId != action.payload )
            }
    
        default:
            return state;
    }
}