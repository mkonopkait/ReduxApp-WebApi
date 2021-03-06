import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Grid, TextField, Button, withStyles } from '@material-ui/core';
import * as productActions from '../actions/product';
import * as invoiceActions from '../actions/invoiceProduct';
import Select from 'react-select';
import { fetchAll } from '../actions/product';
import { addItem } from '../actions/invoiceProduct';

const ProductsInput = (props) => {
    useEffect(() => {
        dispatch(fetchAll())
    }, [])

    const item = {
        productId: '',
        name: '',
        price: ''
    }

    const inputRef = React.createRef();

    const productList = useSelector(state => state.product.list);
    const currentItem = useSelector(state => state.invoiceProduct.currentItem);
    const invoiceList = useSelector(state => state.invoiceProduct.invoiceList);
    const dispatch = useDispatch();
    const [val, setVal] = useState([]);
    const [cItem, setItem] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        //props.addInvoiceItem(item)
        console.log("submit",e);
        setItem(currentItem.name);
        console.log("cItem", cItem);
        setVal(val => [...val, cItem]);
        console.log("lista", val);
        dispatch(addItem(currentItem));
        console.log("ref", inputRef)
    }

    

    const handleInputChange = e =>{
        currentItem.productId = e.container.productId
        currentItem.name = e.container.name
        currentItem.price = e.container.price
        console.log(e)
        console.log("currentItem", currentItem)
    }

        return(
            <form>
                <Grid container >
                <Grid item xs={11}>
                    <Select ref={inputRef} options={productList.map(record => ({label: record.name, value: record.productId, container: record}))}
                    onChange={handleInputChange} 
                    />
                    
                </Grid>
                <Grid sm ={1} item xs={1}>
                    <Button
                        variant="contained"
                        color="primary"                      
                        onClick={handleSubmit}
                    >
                        +
                    </Button>
                </Grid>
            </Grid>
            </form>
        )
    
}

export default ProductsInput;