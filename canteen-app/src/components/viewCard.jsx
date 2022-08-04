import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import cardTable from "./cardTable";


class ViewCard extends Component {
 
    state = { 
       
        card: [],
     };
     // life cycle methods

            
  // Get All carddetails
  //componentDidMount() {
    /*handleGet = (cus_id) =>
    axios
      .get('http://localhost:8081/card_details/customer/${cus_id}')
      .then((response) => {
       console.log(response);
        const newCard = this.state.card.filter((card) => card.cus_id !== cus_id);

        this.setState({ cus_id: response.data })
      })
      .catch((error) => console.log(error));*/

   render() { 
        return (

      <div className="w-50 mx-auto">
        <br></br>
        <label>CusId</label>
        <input></input>
        <br></br>
        <br></br>
             <Link to="/card" className="btn btn-primary float-middle mb-2">
          view card
        </Link> 
        
         </div>
        
        );
    };
}


 export default ViewCard;