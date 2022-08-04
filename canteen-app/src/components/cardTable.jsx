import React from "react";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
// step1:
const CardTable = (props) => {
  //const login = useSelector((state) => state.login.login);

  return (
    
      
        
      
      <table className="table">
        <thead>
          <tr>
            <th>Cus Id</th>
            <th>Card Id</th>
            <th>CardBankName</th>
            <th>CardHolderName</th>
            <th>CardNo</th>
            <th>Cvv</th>
            <th>ExpDate</th>
            <th>Actions</th>
        
          </tr>
        </thead>
        <tbody>
          {props.card.map((card) => (
            <tr key={card.cardId}>
              <td>{card.cusId}</td>
              <td>{card.cardId}</td>
              <td>{card.cardBankName}</td>
              <td>{card.cardHolderName}</td>
              <th>{card.cardNo}</th>
              <th>{card.cvv}</th>
              <th>{card.expDate}</th>
              <th>{card.Actions}</th>
          
                <td>
                  <Link to={`/card/update/${card.cardId}`}>
                    <i className="bi bi-arrow-repeat me-3"></i>
                  </Link>
                  <i
                    className="bi bi-trash3-fill"
                    type="button"
                    onClick={() => props.handleDelete(card.cardId)}
                  ></i>
                </td>
              
            </tr>
          )
          )}
        </tbody>
      </table>
    
  );
}


export default CardTable;