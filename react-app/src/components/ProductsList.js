import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import * as invoiceActions from "../actions/invoiceProduct";
import ProductsListItem from "./ProductsListItem";
import { Grid, TextField,  Table, TableHead, TableContainer, TableBody, TableRow, TableCell, withStyles, Button } from "@material-ui/core";
import  DeleteIcon  from "@material-ui/icons/Delete";
import { deleteItem } from '../actions/invoiceProduct';

const styles = theme => ({
    Button:{
        textAlign:"center",
        justifyContent:"center",
        margin: theme.spacing(1)
    },
    TableContainer:{
        textAlign:"center",
        justifyContent:"center"
    },
    TableHead:{
        
        justifyContent:"center",
        margin: theme.spacing(1)
    }
})

const ProductsList = ({classes, ...props}) => {
    const dispatch = useDispatch();

    const handleDelete = id => {
        console.log(id)
        dispatch(deleteItem(id));
    }

    return(
        <TableContainer className={classes.TableContainer} item xs={12}>
            <Table>
                <TableHead className={classes.TableHead}>
                    <TableRow >
                        <TableCell>Nazwa</TableCell>
                        <TableCell>Cena</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.TableHead}>
                {
                    console.log("ProductList props",props),
                    props.invoiceList.map((record, index) =>{
                        return (<TableRow key={record.productId} hover>
                            <TableCell className={classes.TableHead}>{record.name}</TableCell>
                            <TableCell className={classes.TableHead}>{record.price}</TableCell>
                            <Button className={classes.Button}>
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

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(ProductsList));