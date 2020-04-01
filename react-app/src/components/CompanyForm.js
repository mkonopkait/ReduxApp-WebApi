import React,{useState,} from "react";
import { useSelector } from 'react-redux';
import { Grid, Button, TextField, withStyles } from "@material-ui/core";
import ProductsInput from "./ProductsInput";
import ProductsList from "./ProductsList";
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
    sCompanyName: '',
    sNip: '',
    sAddress: '',
    sZipCode: '',
    sPlace: '',
    sLocality: '',
    pCompanyName: '',
    pNip: '',
    pAddress: '',
    pZipCode: '',
    pPlace: '',
    pLocality: ''
}

const CompanyForm = ({classes, ...props}) => {
    const seller = useSelector(state => state.invoiceProduct.seller);
    const purchaser = useSelector(state => state.invoiceProduct.purchaser);

    const validate = (fieldValues = values) => {
        let temp ={}
        if('sCompanyName' in fieldValues)
            temp.sCompanyName = fieldValues.sCompanyName?"":"To pole jest wymagane"
        if('sNip' in fieldValues)
            temp.sNip = (fieldValues.sNip)?"":"NIP jest niepoprawny"
        if('sAddress' in fieldValues)
            temp.sAddress = fieldValues.sAddress?"":"To pole jest wymagane"
        if('sZipCode' in fieldValues)
            temp.sZipCode = fieldValues.sZipCode?"":"To pole jest wymagane"
        if('sPlace' in fieldValues)
            temp.sPlace = fieldValues.sPlace?"":"To pole jest wymagane"
        if('sLocality' in fieldValues)
            temp.sLocality = fieldValues.sLocality?"":"To pole jest wymagane"
        if('pCompanyName' in fieldValues)
            temp.pCompanyName = fieldValues.pCompanyName?"":"To pole jest wymagane"
        if('pNip' in fieldValues)
            temp.pNip = fieldValues.pNip?"":"To pole jest wymagane"
        if('pAddress' in fieldValues)
            temp.pAddress = fieldValues.pAddress?"":"To pole jest wymagane"
        if('pZipCode' in fieldValues)
            temp.pZipCode = fieldValues.pZipCode?"":"To pole jest wymagane"
        if('pPlace' in fieldValues)
            temp.pPlace = fieldValues.pPlace?"":"To pole jest wymagane"
        if('pLocality' in fieldValues)
            temp.pLocality = fieldValues.pLocality?"":"To pole jest wymagane"
        setErrors({
            ...temp
        })

        if(fieldValues == values)
            return Object.values(temp).every(x => x =="")
    }

    const handleSubmit = e => {
        console.log("git")
        if(validate()){
            Window.alert('Sukces! Możesz teraz zaimportować dokument.')
        }
        
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues, validate)

    return ( 
    <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
        <Grid container>
            <Grid item xs={6}>
                <TextField
                    name="sCompanyName"
                    variant="outlined"
                    label="Sprzedawca"
                    value={values.sCompanyName}
                    onChange={handleInputChange}
                    {...(errors.sCompanyName && {error:true, helperText: errors.sCompanyName})}
                />
                <TextField
                    name="sNip"
                    variant="outlined"
                    label="NIP"
                    value={values.sNip}
                    onChange={handleInputChange}
                    {...(errors.sNip && {error:true, helperText: errors.sNip})}
                />
                <TextField
                    name="sAddress"
                    variant="outlined"
                    label="Ulica i nr"
                    value={values.sAddress}
                    onChange={handleInputChange}
                    {...(errors.sAddress && {error:true, helperText: errors.sAddress})}
                />
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            name="sZipCode"
                            variant="outlined"
                            label="Kod pocztowy"
                            value={values.sZipCode}
                            onChange={handleInputChange}
                            {...(errors.sZipCode && {error:true, helperText: errors.sZipCode})}
                        />
                    </Grid><Grid item xs={6}>
                        <TextField
                            name="sLocality"
                            variant="outlined"
                            label="Miejscowość"
                            value={values.sLocality}
                            onChange={handleInputChange}
                            {...(errors.sLocality && {error:true, helperText: errors.sLocality})}
                        />
                    </Grid>
                </Grid>
           
            
            </Grid>
            <Grid item xs={6}>
                <TextField
                    name="pCompanyName"
                    variant="outlined"
                    label="Nabywca"
                    value={values.pCompanyName}
                    onChange={handleInputChange}
                    {...(errors.pCompanyName && {error:true, helperText: errors.pCompanyName})}
                />
                <TextField
                    name="pNip"
                    variant="outlined"
                    label="NIP"
                    value={values.pNip}
                    onChange={handleInputChange}
                    {...(errors.pNip && {error:true, helperText: errors.pNip})}
                />
                <TextField
                    name="pAddress"
                    variant="outlined"
                    label="Ulica i nr"
                    value={values.pAddress}
                    onChange={handleInputChange}
                    {...(errors.pAddress && {error:true, helperText: errors.pAddress})}
                />
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            name="pZipCode"
                            variant="outlined"
                            label="Kod pocztowy"
                            value={values.pZipCode}
                            onChange={handleInputChange}
                            {...(errors.pZipCode && {error:true, helperText: errors.pZipCode})}
                        />
                    </Grid><Grid item xs={6}>
                        <TextField
                            name="pLocality"
                            variant="outlined"
                            label="Miejscowość"
                            value={values.pLocality}
                            onChange={handleInputChange}
                            {...(errors.pLocality && {error:true, helperText: errors.pLocality})}
                        />
                    </Grid>
                </Grid>
           
            
            </Grid>
            <Grid item xs={12}>
                <ProductsList/>
                <ProductsInput/>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Zatwierdź
                </Button>
            </Grid>
        </Grid>

    </form>
    );
}

export default withStyles(styles) (CompanyForm);