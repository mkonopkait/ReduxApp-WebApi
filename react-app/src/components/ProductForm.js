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
                name="Sprzedawca"
                variant="outlined"
                label="Sprzedawca"
                value={values.fullName}
                onChange={handleInputChange}
                />
                <TextField
                name="NIP"
                variant="outlined"
                label="NIP"
                value={values.drugie}
                onChange={handleInputChange}
                />
                <TextField
                name="Ulica"
                variant="outlined"
                label="Ulica i nr"
                value={values.drugie}
                onChange={handleInputChange}
                />
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                        name="Sprzedawca"
                        variant="outlined"
                        label="Sprzedawca"
                        value={values.fullName}
                        onChange={handleInputChange}
                        />
                    </Grid><Grid item xs={6}>
                        <TextField
                        name="Sprzedawca"
                        variant="outlined"
                        label="Sprzedawca"
                        value={values.fullName}
                        onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <TextField
                name="Nabywca"
                variant="outlined"
                label="Nabywca"
                value={values.fullName}
                onChange={handleInputChange}
                />
                <TextField
                name="NIP"
                variant="outlined"
                label="NIP"
                value={values.drugie}
                onChange={handleInputChange}
                />
                <TextField
                name="Ulica"
                variant="outlined"
                label="Ulica i nr"
                value={values.drugie}
                onChange={handleInputChange}
                />
            </Grid>
        </Grid>
    </form>
    );
}

export default withStyles(styles) (ProductForm);