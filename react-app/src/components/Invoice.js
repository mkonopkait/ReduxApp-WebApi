import React, {useState, useEffect} from "react";
import { connect } from 'react-redux';
import * as actions from "../actions/product";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, Button } from "@material-ui/core";
import ProductForm from "./ProductForm";
import CompanyForm from "./CompanyForm";
import ProductsList from "./ProductsList";
import ProductsListItem from "./ProductsListItem";
import ProductsInput from "./ProductsInput";
import Pdf from "react-to-pdf";

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

const ref = React.createRef();

const Invoice = ({classes, ...props}) => {
    //const [x, setX] = useState(0)
    //setX(5)

    useEffect(() => {
        
    }, [])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log()
    }

    return (
        <Paper ref={ref} className={classes.paper} elevation={3} style={{backgroundColor: '#F5F5F5'}}>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div className={classes.div}>
                <h1>Faktura</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={10}>
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