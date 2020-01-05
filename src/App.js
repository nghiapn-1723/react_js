import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createCoverageMap } from 'istanbul-lib-coverage';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class Header extends React.Component {
  render() {
    var i = 1;
    var redHeader = {
      color: 'red'
    }
    return (
      <div style={redHeader}>
        <h1>Header {1}</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
     return (
        <tr>
           <td>{this.props.data.id}</td>
           <td>{this.props.data.name}</td>
           <td>{this.props.data.age}</td>
        </tr>
     );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
      [
        {
          "id": 1,
          "name": "Foo",
          "age": 20
        },
        {
          "id": 2,
          "name": "Bar",
          "age": 30
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Header />
            <Content />
            <table>
              <tbody>
                {this.state.data.map((persion, i) => <TableRow key = {i} data = {persion} />)}
              </tbody>
            </table>

            <div>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                </ul>
                {this.props.children}
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default App;

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}
export default Home;
