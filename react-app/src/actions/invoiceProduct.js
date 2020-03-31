
export const ACTION_TYPES = {
    ADD_INVOICE_PRODUCT : 'ADD_INVOICE_PRODUCT',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

const newItem = {
    name: 'dddd',
    productId: '3',
    price: '1'
 }

export const addItem = (item) => dispatch => {
    console.log("add item", item)
        dispatch({
            type:ACTION_TYPES.ADD_INVOICE_PRODUCT,
            payload: item
        })
}

/*const initialState ={
    list:[
        {
             name: 'dasdasdas',
             productId: '1',
             price: '1'
        },
        {
             name: 'dasdasdas',
             productId: '2',
             price: '1'
        }
    ]
 }

export const fetchAllItems = (item) => dispatch => {
    console.log("invoice product fetch", item)
    dispatch({
        
        type:ACTION_TYPES.FETCH_ALL,
        payload: [initialState]
    })
}*/
