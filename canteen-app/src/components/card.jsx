import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

import CardTable from "./cardTable";

class Card extends Component {
    state = { 
       
        card: [],
     };
     // life cycle methods

  // Get All carddetails
  componentDidMount() {
    // send get request
    axios
      .get("http://localhost:8081/card_details")
      .then((response) => {
       console.log(response);
        this.setState({ card: response.data })
      })
      .catch((error) => console.log(error));
  }

   /*handleGet = (cus_id) =>
    axios
      .fetch('http://localhost:8081/card_details/customer/${cus_id}')
      .then((response) => {
       console.log(response);
        const newCard = this.state.card.filter((card) => card.card_id !== card_id);

        this.setState({ card_id: response.data })
      })
      .catch((error) => console.log(error));*/
  
  // Delete Payment
  handleDelete = (card_id) => {
    
    axios
      .delete(`http://localhost:8081/card_details/${card_id}`)
      .then((res) => {
        console.log(res);
        
        const newCard = this.state.card.filter((card) => card.card_id !== card_id);

        // update state object with card
        this.setState({ card: newCard });
        alert("Card with cardId " + card_id + " deleted successfully!");
      })
      .catch((err) => console.log(err));
  };


   render() { 
        return (
      <div className="w-50 mx-auto">
        <h4 className="mt-3">Card Details</h4>
        <CardTable
          card={this.state.card}
          handleDelete={this.handleDelete}
        />
      </div>
        
        );
    };
  /*handleGet = (cus_id) =>
    axios
      .get('http://localhost:8081/card_details/customer/${id}')
      .then((response) => {
       console.log(response);
        const newCard = this.state.card.filter((card) => card.cus_id !== cus_id);

        this.setState({ cus_id: response.data })
      })
      .catch((error) => console.log(error));

   render() { 
        return (
<div className="w-50 mx-auto">
        <h4 className="mt-3">Card Details</h4>
        <CardTable
          card={this.state.card}
          handleGet={this.handleGet}
        />
      </div>
      
        );*/
}

 
export default Card;