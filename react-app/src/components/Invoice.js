import React, {useState, useEffect} from "react";
import * as actions from "../actions/product";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, Button } from "@material-ui/core";
import CompanyForm from "./CompanyForm";

const styles = theme => ({
    paper:{
        margin: theme.spacing(4),
        padding: theme.spacing(2)
    },
    div:{
        textAlign:"center",
        fontSize:"1.1rem",
        justifyContent:"center",
        margin: "0"
    }
})


const Invoice = ({classes, ...props}) => {
    useEffect(() => {
        
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log()
    }

    return (
        <Paper className={classes.paper} elevation={3} style={{backgroundColor: '#F5F5F5'}}>
            <div className={classes.div}>
                <h1>Faktura</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <CompanyForm/>
                    </Grid>
                    <Grid item xs={10}>
                        
                    </Grid>
                </Grid>
            </form>
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