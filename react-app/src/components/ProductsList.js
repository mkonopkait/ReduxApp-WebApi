import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import * as invoiceActions from "../actions/invoiceProduct";
import ProductsListItem from "./ProductsListItem";
import { Grid, TextField,  Table, TableHead, TableContainer, TableBody, List, ListItem, TableRow, TableCell, withStyles, Button, ButtonGroup } from "@material-ui/core";
import  DeleteIcon  from "@material-ui/icons/Delete";
import { deleteItem } from '../actions/invoiceProduct';

const ProductsList = ({classes, ...props}) => {
    const dispatch = useDispatch();

    const handleDelete = id => {
        console.log(id)
        dispatch(deleteItem(id));
    }

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nazwa</TableCell>
                        <TableCell>Cena</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    console.log("ProductList props",props),
                    props.invoiceList.map((record, index) =>{
                        return (<TableRow key={record.productId} hover>
                            <TableCell>{record.name}</TableCell>
                            <TableCell>{record.price}</TableCell>
                            <Button>
                                <DeleteIcon color="secondary"
                                    onClick={() => handleDelete(record.productId)}>
                                </DeleteIcon>
                            </Button>
                        </TableRow>)
                    })
                }
                </TableBody>
            </Table>
        </TableContainer>
    )

}

const mapStateToProps = state =>({
    invoiceList:state.invoiceProduct.invoiceList
})

const mapActionToProps = {

}

export default connect(mapStateToProps, mapActionToProps) (ProductsList);