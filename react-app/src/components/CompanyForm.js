import React,{useState,} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Button, TextField, withStyles } from "@material-ui/core";
import ProductsInput from "./ProductsInput";
import ProductsList from "./ProductsList";
import useForm from "./useForm";
import { setCompanies } from "../actions/invoiceProduct";

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 200,
            
        }
    },
    Main:{
        alignItems: 'center',
        justifyContent:'center',
        margin: theme.spacing(1),
        width: '20%',
    },
    Button:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    sCompanyName: '',
    sNip: '',
    sAddress: '',
    sZipCode: '',
    sLocality: '',
    pCompanyName: '',
    pNip: '',
    pAddress: '',
    pZipCode: '',
    pLocality: ''
}

const CompanyForm = ({classes, ...props}) => {
    const seller = useSelector(state => state.invoiceProduct.seller);
    const purchaser = useSelector(state => state.invoiceProduct.purchaser);
    const companies = useSelector(state => state.invoiceProduct.companies);
    const dispatch = useDispatch();

    const validate = (fieldValues = values) => {
        let temp ={}
        if('sCompanyName' in fieldValues)
            temp.sCompanyName = fieldValues.sCompanyName?"":"To pole jest wymagane"
        if('sNip' in fieldValues)
            temp.sNip = (/([0-9]{10})/).test(fieldValues.sNip)?"":"NIP wymaga 10 cyfr"
        if('sAddress' in fieldValues)
            temp.sAddress = fieldValues.sAddress?"":"To pole jest wymagane"
        if('sZipCode' in fieldValues)
            temp.sZipCode = (/([0-9]{2})\-[0-9]{3}/).test(fieldValues.sZipCode)?"":"To pole jest wymagane"
        if('sLocality' in fieldValues)
            temp.sLocality = fieldValues.sLocality?"":"To pole jest wymagane"
        if('pCompanyName' in fieldValues)
            temp.pCompanyName = fieldValues.pCompanyName?"":"To pole jest wymagane"
        if('pNip' in fieldValues)
            temp.pNip = (/([0-9]{10})/).test(fieldValues.pNip)?"":"NIP wymaga 10 cyfr"
        if('pAddress' in fieldValues)
            temp.pAddress = fieldValues.pAddress?"":"To pole jest wymagane"
        if('pZipCode' in fieldValues)
            temp.pZipCode = (/([0-9]{2})\-[0-9]{3}/).test(fieldValues.pZipCode)?"":"To pole jest wymagane"
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
            console.log(values)
            dispatch(setCompanies(values));
            console.log("companies",companies)
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
        <Grid container >
            <Grid className={classes.Main} item sm={5} xs={6}>
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
                
                <TextField
                    name="sZipCode"
                    variant="outlined"
                    label="Kod pocztowy"
                    value={values.sZipCode}
                    onChange={handleInputChange}
                    {...(errors.sZipCode && {error:true, helperText: errors.sZipCode})}
                />
            
                <TextField
                    name="sLocality"
                    variant="outlined"
                    label="Miejscowość"
                    value={values.sLocality}
                    onChange={handleInputChange}
                    {...(errors.sLocality && {error:true, helperText: errors.sLocality})}
                />
            </Grid>
            <Grid className={classes.Main} item  item sm={5} xs={6}>
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
                <TextField
                    name="pZipCode"
                    variant="outlined"
                    label="Kod pocztowy"
                    value={values.pZipCode}
                    onChange={handleInputChange}
                    {...(errors.pZipCode && {error:true, helperText: errors.pZipCode})}
                />
                <TextField
                    name="pLocality"
                    variant="outlined"
                    label="Miejscowość"
                    value={values.pLocality}
                    onChange={handleInputChange}
                    {...(errors.pLocality && {error:true, helperText: errors.pLocality})}
                />
            </Grid>
            <Grid className={classes.Main} item xs={8} sm={11}>
                <ProductsList />
                <ProductsInput />
                <Button className={classes.Button}
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