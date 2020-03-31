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

const initialFieldValues = {
    companyName: '',
    nip: '',
    address: '',
    zipCode: '',
    place: '',
    locality: ''
}

const CompanyForm = ({classes, ...props}) => {
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)

    return ( 
    <form autoComplete="off" noValidate className={classes.root}>
        <Grid container>
            <Grid item xs={6}>
                <TextField
                    name="companyName"
                    variant="outlined"
                    label="Sprzedawca"
                    value={values.companyName}
                    onChange={handleInputChange}
                />
                <TextField
                    name="nip"
                    variant="outlined"
                    label="NIP"
                    value={values.nip}
                    onChange={handleInputChange}
                />
                <TextField
                    name="address"
                    variant="outlined"
                    label="Ulica i nr"
                    value={values.drugie}
                    onChange={handleInputChange}
                />
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            name="zipCode"
                            variant="outlined"
                            label="Kod pocztowy"
                            value={values.zipCode}
                            onChange={handleInputChange}
                        />
                    </Grid><Grid item xs={6}>
                        <TextField
                            name="locality"
                            variant="outlined"
                            label="Miejscowość"
                            value={values.locality}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
           
            
            </Grid>
        </Grid>
    </form>
    );
}

export default withStyles(styles) (CompanyForm);