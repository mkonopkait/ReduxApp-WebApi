import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import * as invoiceActions from "../actions/invoiceProduct";
import ProductsListItem from "./ProductsListItem";
import { Grid, TextField, Table, TableHead, TableContainer, TableBody, List, ListItem, TableRow, TableCell, withStyles } from "@material-ui/core";

const ProductsList = ({classes, ...props}) => {

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    console.log("ProductList props",props),
                    props.invoiceList.map((record, index) =>{
                        return (<TableRow key={index} hover>
                            <TableCell>{record.name}</TableCell>
                            <TableCell>{record.price}</TableCell>
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