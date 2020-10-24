import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container";
import SearchForm from "../SearchForm";
import Table from "../Table";
import { sortingFunction } from '../../utils/sortingFunction'

class Directory extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    API.getEmployeeList()
      .then(results => {
        this.setState({
          employees: results.data.results,
          filteredEmployees: results.data.results
        });
      });
  }

  sortingFunctionHandler = () => {
    this.setState(
      {
        ...this.state,
        filteredEmployees: sortingFunction(this.state.filteredEmployees)
      }
    )
  }

  handleInputChange = event => {
    const filter = event.target.value;
    const filteredList = this.state.employees.filter(item => {
      let values = Object.values(item).join("").toLowerCase()
      return values.indexOf(filter.toLowerCase()) !== -1;
    })
    
    this.setState({ 
      filteredEmployees: filteredList, 
      search: event.target.value 
    })
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%", minWidth: "80%" }}>
          <SearchForm
            handleInputChange={this.handleInputChange}
          />
          <Table employees={this.state.filteredEmployees} sortingFunctionHandler={this.sortingFunctionHandler} />
        </Container>
      </div>
    );
  }
}

export default Directory;
