import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

import PaymentTable from "./paymentTable";

class Payments extends Component {
    state = { 
       // payment : [
       //   {
        //     paymentId: 10,
          //  totalPayment: 500,
            //  paymentType: "Creditcard",
         // },
          //{
                 //paymentId: 20,
                 //totalPayment: 1000,
                 //paymentType: "Cash",

                 // },
                  //{
                 //paymentId: 30,
                 //totalPayment: 2000,
                 //paymentType: "Phonepay",
               //  },
        // ],
        payments : [],
     };
     // life cycle methods

  // Get All payments
  componentDidMount() {
    // send get request
    axios
      .get("http://localhost:8081/payments")
      .then((response) => {
       console.log(response);
        this.setState({ payments: response.data })
      })
      .catch((error) => console.log(error));
  }


  // Delete Payment
  handleDelete = (paymentId) => {
    // http://localhost:8081/payment/{id}
    axios
      .delete(`http://localhost:8081/payment/${paymentId}`)
      .then((res) => {
        console.log(res);
        // return all payments except payment which is selected for delete
        const payments = this.state.payments.filter((payment) => payment.paymentId != paymentId);

        // update state object with payments
        this.setState({ payments: payments });
        alert("Payment with paymentId " + paymentId + " deleted successfully!");
      })
      .catch((err) => console.log(err));
  };
   render() { 
        return (
      <div className="w-50 mx-auto">
        <h4 className="mt-3 text-success">Payment Details</h4>
        <PaymentTable
          payments={this.state.payments}
          handleDelete={this.handleDelete}
        />
      </div>
        
        );
    }
  }
 
export default Payments;