import React, { Component } from 'react';
import JsonTree from './components/JsonTree/JsonTree'
import './App.css';

class App extends Component{

  state={
    src:{
      version: '2',
      services:{}
    }
  }

  onAdd = (e) =>{
    console.log(e);
    this.setState({src: e.updated_src})    
  }

  onEdit = (e) =>{
    this.setState({src: e.updated_src})    
  }

  onDelete = (e) =>{
    console.log(e)
    this.setState({src: e.updated_src})    
  }





  render(){
    return (
      <div className="App">
        <JsonTree src={this.state.src} theme='summerfruit:inverted' 
                  onAdd={this.onAdd} onEdit={this.onEdit} 
                  onDelete={this.onDelete} displayDataTypes  displayObjectSize/>
      </div>
    );
  }
  
}

export default App;
