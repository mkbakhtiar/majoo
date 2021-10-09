import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getTodoList } from '../actions/todoActions'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getTodoList());
  }

  render() {
    
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);