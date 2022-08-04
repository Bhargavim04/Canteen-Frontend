import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { useParams, useNavigate } from "react-router-dom";
// step1:
 
const CardDetailsById = (props) => {
  //const login = useSelector((state) => state.login.login);

  return (
    <div>
      
      <Link to="/card/add" className="btn btn-primary float-middle mb-2">
          Add New
        </Link>  


      
    

</div>
  )
}

export default CardDetailsById;