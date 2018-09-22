import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Yelp} from './utils/Yelp';

class Info extends React.Component {
  constructor(props) {
    super(props)
    }

    render() {
        return (
        <div>
          <h4>{this.props.value}</h4>
        </div>
      )
    }
} 

class App extends Component {
  constructor (props) {
      super(props);
      this.state = {
          inputvalue: '',
          submitted: false
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
      this.setState({
          inputvalue: event.target.value
      })
  }

  handleSubmit (event) {
      console.log('Form value: ' + this.state.inputvalue);
      console.log('OMG');
      console.log(Yelp({location: this.state.inputvalue}));
      event.preventDefault();
  }

  renderInfo(){

    return <Info value={this.state.inputvalue} />
  }

  render() {
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
              <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/

export default App;
