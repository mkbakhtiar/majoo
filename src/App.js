import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter, Route  } from 'react-router-dom';
import HomeContainer from './container/HomeContainer';
import EditTodoContainer from './container/EditTodoContainer';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer/>
          </Route>
          <Route path="/edit" exact>
            <EditTodoContainer />
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}
