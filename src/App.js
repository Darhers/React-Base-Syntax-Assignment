import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput'
import './App.css';

class App extends Component {
  
  state = {
    users: [
      {name: "Dar Hershkovits"},
      {name: "Hila Hershkovits"},
      {name: "Alon Hershkovits"}
    ]
  };

  nameChangeHandler = (event) => {
    this.setState({users: [
      {name: event.target.value},
      {name: "Hila Hershkovits"},
      {name: "Alon Hershkovits"}
    ]

    })
  }
  render() {
    const appStyle = {
      width: "80%",
      border: "1px solid black",
      margin: "10px auto",
      font: "inherit",
      padding: "10px"
    }
  
    return(
      <div className="App" style={appStyle}>
        <UserInput changed={this.nameChangeHandler.bind(this)} name={this.state.users[0].name} />
        <UserOutput name={this.state.users[0].name} />
        <UserOutput name={this.state.users[1].name} />
        <UserOutput name={this.state.users[2].name} />
      </div>
    )
  }
}

export default App;
