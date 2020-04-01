import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Products from './components/Products';
import Invoice from './components/Invoice';
import { Container, } from "@material-ui/core";
import Document from './components/Document';

function App() {
    return (
      <Provider store={store}>
        <Container maxWidth="lg">
          <Invoice/>
        </Container>
      </Provider>
    );
}

export default App;
