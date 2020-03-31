import React from 'react';
import { Paper, Grid, TextField, Table, TableHead, TableContainer, TableBody, List, TableRow, TableCell, withStyles, Input, Button } from '@material-ui/core';
import ListItems from './ListItems';

class Document extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
      }

      handleInput(e){
          this.setState({
              currentItem:{
                  text: e.target.value,
                  key: Date.now()
              }
          })
      }

      addItem(e){
          e.PreventDefault();
          const newItem = this.state.currentItem;
          console.log(newItem);
          if(newItem.text !==''){
              const newItems= [...this.state.items, newItem];
              this.setState({
                  items:newItems,
                  currentItem:{
                      text:'',
                      key:''
                  }
              })
          }
      }

      render(){

          return(
                <div className="Document"> 
                    <header>
                    <form id="my-form" onSubmit={this.addItem}>
                        <input type="text" placeholder="enter"
                            value={this.state.currentItem.text}
                            onChange={this.handleInput}/>
                        <button 
                            
                            type="submit">
                                +
                            </button>
                    </form>
                    </header>
                    
                    <ListItems >

                    </ListItems>
                    
                </div>
          );
      }
}
export default Document;