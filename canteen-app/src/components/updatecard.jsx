import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Updatecard = () => {
  const params = useParams();
  let navigate = useNavigate();
  console.log(params);

  // define state
  const [card, setCard] = useState({
    cardId: "",
    cardBankName: "",
    cardHolderName: "",
    cardNo: "",
    cvv: "",
    expDate: "",
    
  });

  //useEffect(callback function,[condition] )
  
  useEffect(() => {
    axios
      .get(`http://localhost:8081/card_details/${params.card_id}`)
      .then((res) => setCard(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name); // returns field name
    console.log(event.target.value); // retruns filed value

  
    const newCard = { ...card };

    
    newCard[event.target.name] = event.target.value;

    
    setCard(newCard);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send put request to update
    axios
      .put(`http://localhost:8081/card_details/${params.card_id}`, card)
      .then((res) => {
        console.log(res);
        // alert user with msg
        alert("Updated card " + res.data.cardId + " successfully!");
        // redirect to employees page
        navigate("/card");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <p className="display-6">Update Card</p>
        <form className="border p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="cardId" className="form-label float-start">
              Card Id
            </label>
            <input
              type="text"
              className="form-control"
              id="cardId"
              value={card.cardId}
              name="cardId"
              onChange={handleChange}
             // disabled
            />
          </div>
          <div className="mb-3">
           <select class="form-select" aria-label="Default select example">
          <label for="exampleInputCardBankName" class="form-label">
              CardBankName
            </label>
            
            <option selected>cardBankName</option>
            <option value="1">sbi</option>
            <option value="2">axis</option>
            <option value="3">icici</option>
          </select>
          </div>
          <div className="mb-3">
            <label htmlFor="cardHolderName" className="form-label float-start">
              card Holder Name
            </label>
            <input
              type="text"
              className="form-control"
              id="cardHolderName"
              value={card.cardHolderName}
              name="cardHolderName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="salary" className="form-label float-start">
              Card No
            </label>
            <input
              type="number"
              className="form-control"
              id="cardNo"
              value={card.cardNo}
              name="cardNo"
              onChange={handleChange}
            />
          </div>
          
 <div className="mb-3">
            <label htmlFor="number" className="form-label float-start">
              Cvv
            </label>
            <input
              type="number"
              className="form-control"
              id="cvv"
              aria-describedby="emailHelp"
              value={card.cvv}
              name="cvv"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label float-start">
              Exp date
            </label>
            <input
              type="date"
              className="form-control"
              id="expdate"
              aria-describedby="emailHelp"
              value={card.expDate}
              name="expDate"
              onChange={handleChange}
            />
          </div>
          
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Updatecard;