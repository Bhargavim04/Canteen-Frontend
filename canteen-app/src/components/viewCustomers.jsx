import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import CustomerTable from './customerTable';

class ViewCustomers extends Component {
    state = { 
        customers: [],
     } 
     //Life cycle methods
     componentDidMount() {
      // send get request
      axios
        .get("http://localhost:8081/customers")
        .then((response) => {
          console.log(response);
          this.setState({ customers: response.data });
        })
        .catch((error) => console.log(error));
  }
    // Delete Employee
  handleDelete = (cusId) => {
    // http://localhost:8081/customer/{id}
    axios
      .delete(`http://localhost:8081/customer/${cusId}`)
      .then((res) => {
        console.log(res);
        // return all customers except cus which is selected for delete
        const custs = this.state.customers.filter((cus) => cus.cusId != cusId);

        // update state object with employees
        this.setState({ customers: custs });
        alert("Customer with cusId " + cusId + " deleted successfully!");
      })
      .catch((err) => console.log(err));
  };

    render() { 
        return (
          <div>
          <h1 >Customer Details</h1>
          <CustomerTable 
          customers={this.state.customers}
          handleDelete={this.handleDelete} />
          </div>
        );
    }
}
 
export default ViewCustomers;