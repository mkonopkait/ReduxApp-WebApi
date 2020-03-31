import api from "./api";

export const ACTION_TYPES = {
    ADD : 'ADD',
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

const initialState = {
    list:[
        {
             name: 'dddd',
             productId: '3',
             price: '1'
        },
        {
             name: 'kkkk',
             productId: '4',
             price: '1'
        }
    ]
 }

 const newItem = {
    name: 'dddd',
    productId: '3',
    price: '1'
 }

/*export const fetchAll = () => dispatch => {

    console.log("fetch product", newItem)
        dispatch({
            type:ACTION_TYPES.FETCH_ALL,
            payload: newItem
        })
}*/

/*export const fetchAll = (state) => dispatch => {

    console.log("fetch product", initialState)
        dispatch({
            type:ACTION_TYPES.FETCH_ALL,
            payload: [...initialState.list]
        })
}*/

export const fetchAll = () => dispatch => {
api.product().fetchAll()
    .then(respone => {
        
        dispatch({
            type:ACTION_TYPES.FETCH_ALL,
            payload: respone.data
        })
    })
    .catch(error => console.log(error))
}
