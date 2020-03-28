import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import * as actions from "../actions/product";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import ProductForm from "./ProductForm";

const Products = (props) => {
    //const [x, setX] = useState(0)
    //setX(5)

    useEffect(() => {
        props.fetchAllProducts()
    }, [])

    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <ProductForm/>
                </Grid>
                <Grid item xs={6}>
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
                                    props.productList.map((record, index) =>{
                                        return (<TableRow key={index}>
                                            <TableCell>{record.name}</TableCell>
                                            <TableCell>{record.price}</TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state =>({
        productList:state.product.list
    })

const mapActionToProps = {
    fetchAllProducts: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps) (Products);