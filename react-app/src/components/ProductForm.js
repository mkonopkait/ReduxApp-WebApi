import React,{useState} from "react";
import { Grid, TextField, withStyles } from "@material-ui/core";
import useForm from "./useForm";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 230,
        }
    },
})

const initalFieldValues = {
    fullName: '',
    drugie: ''
}

const ProductForm = ({classes, ...props}) => {
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initalFieldValues)

    return ( 
    <form autoComplete="off" noValidate className={classes.root}>
        <Grid container>
            <Grid item xs={6}>
                <TextField
                name="Name"
                variant="outlined"
                label="Name"
                value={values.fullName}
                onChange={handleInputChange}
                />
                <TextField
                name="drugie"
                variant="outlined"
                label="drugie"
                value={values.drugie}
                onChange={handleInputChange}
                />
            </Grid>
        </Grid>
    </form>
    );
}

export default withStyles(styles) (ProductForm);