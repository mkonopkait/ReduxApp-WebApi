import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Invoice from './components/Invoice';
import { Container, Button, } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Preview from './components/Preview';

function App() {
    return (
      <Provider store={store}>
        <Router> 
          <div>
            <Button variant="contained" color="primary"  >
              <Link to="/Preview">Faktura</Link>
            </Button>
            <Button variant="contained" color="primary"  >
              <Link to="/">Formularz</Link>
            </Button>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/Preview">
                <Container maxWidth="lg">
                  <Preview/>
                </Container>
            </Route>
            <Route path="/">
                <Container maxWidth="lg">
                  <Invoice/>
                </Container>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
    );
}

export default App;
