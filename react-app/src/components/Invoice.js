import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import * as actions from "../actions/product";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles } from "@material-ui/core";
import ProductForm from "./ProductForm";
import CompanyForm from "./CompanyForm";
import ProductsList from "./ProductsList";
import ProductsListItem from "./ProductsListItem";
import ProductsInput from "./ProductsInput";

const styles = theme => ({
    paper:{
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    div:{
        textAlign:"center",
        fontSize:"1rem",
        justifyContent:"center",
        margin: "0"
    }
})

const Invoice = ({classes, ...props}) => {
    //const [x, setX] = useState(0)
    //setX(5)

    useEffect(() => {
        
    }, [])

    return (
        <Paper className={classes.paper} elevation={3} style={{backgroundColor: '#F5F5F5'}}>
            <div className={classes.div}>
                <h1>Faktura</h1>
            </div>
            <Grid container>
                <Grid item xs={10}>
                    <CompanyForm/>
                </Grid>
                <Grid item xs={10}>
                    <ProductsList/>
                    <ProductsInput/>
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

export default (withStyles(styles) (Invoice));