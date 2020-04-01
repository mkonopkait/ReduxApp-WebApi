import React, {useState, useEffect} from "react";
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, Button } from "@material-ui/core";
import { useSelector } from 'react-redux';
import Pdf from "react-to-pdf";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = theme => ({
    paper:{
        margin: theme.spacing(4),
        padding: theme.spacing(2),
        heigth: "1000px"
    },
    div:{
        textAlign:"center",
        fontSize:"1.1rem",
        justifyContent:"center",
        margin: "0"
    }
})

const ref = React.createRef();

const Preview = ({classes, ...props}) => {
    useEffect(() => {
        
    }, [])

    const invoiceList = useSelector(state => state.invoiceProduct.invoiceList);
    const companies = useSelector(state => state.invoiceProduct.companiesData);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log()
    }

    return (
        <Paper className={classes.paper} ref={ref} className={classes.paper} elevation={3} style={{backgroundColor: '#F5F5F5'}}>
            <Document>
                <Page size="A4">
                    <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                    <div className={classes.div}>
                        <h1>Faktura</h1>
                    </div>
                    <form  onSubmit={handleSubmit}>
                        <Grid  container>
                            <Grid item xs={6}>
                                <div>Sprzedawca: {companies.sCompanyName}</div> 
                                <div>NIP: {companies.sNip}</div>
                                <div>Adres: {companies.sAddress}</div>
                                <div>Kod pocztowy: {companies.sZipCode}</div>
                                <div>Miejscowość: {companies.sLocality}</div>
                            </Grid>
                            <Grid item xs={6}>
                                <div>Nabywca: {companies.pCompanyName}</div>
                                <div>NIP: {companies.pNip}</div>
                                <div>Adres: {companies.pAddress}</div>
                                <div>Kod pocztowy: {companies.pZipCode}</div>
                                <div>Miejscowość: {companies.pLocality}</div>
                            </Grid>
                            <TableContainer item xs={12}>
                                <Table>
                                    <TableHead>
                                        <TableRow >
                                            <TableCell>Nazwa</TableCell>
                                            <TableCell>Cena</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {
                                        console.log("ProductList props",props),
                                        invoiceList.map((record, index) =>{
                                            return (<TableRow key={record.productId} hover>
                                                <TableCell >{record.name}</TableCell>
                                                <TableCell >{record.price}</TableCell>
                                            </TableRow>)
                                        })
                                    }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Grid item xs={6}>
                                <h5> {companies.sCompanyName}</h5> 
                            </Grid>
                            <Grid item xs={6}>
                                <h5> {companies.pCompanyName}</h5> 
                            </Grid>
                        </Grid>
                    </form>
                </Page>
            </Document>
        </Paper>
        
    );
}

export default (withStyles(styles) (Preview));