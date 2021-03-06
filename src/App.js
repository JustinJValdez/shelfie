import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
  }
  componentDidMount() {
    axios.get("/api/inventory")
      .then((res) => {
        this.setState({
          inventory: res.data
        })

      }
      )
  }


  render() {
    return (
      <div>
        <header className="Header" >
          <Header  />
        </header>
        <Dashboard inventory={this.state.inventory} />
        <Form />


      </div >
    );
  }
}

export default App;
