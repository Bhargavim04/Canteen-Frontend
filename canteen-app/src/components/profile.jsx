import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomerDtoByEmailAction } from "../actions/loginactions";
import { getCustomerAddrByEmailAction } from "../actions/loginactions";
import { Link } from "react-router-dom";

const Profile = () => {

  const login = useSelector((state) => state.custstore.login);
  console.log(login);
  
  const dispatch = useDispatch();
  //useEffect(func, [conditional stmt])
  // dispatches getCustomerByEmailAction at the time of page loading
  useEffect(() => {
    dispatch(getCustomerDtoByEmailAction(login.email));
  }, []);

  // get customer info from redux store
  const cus = useSelector((state) => state.custstore.cust);

   useEffect(() => {
    dispatch(getCustomerAddrByEmailAction(login.email));
  }, []);

  // get customer info from redux store
  const addr = useSelector((state) => state.custstore.addr);
  console.log(addr);
  return ( 
    <div>
      <div className="container mt-5">
        <div className="card w-50 mx-auto">
          <div className="d-flex justify-content-between card-header">
            <h5>Personal Details</h5>
            <h5>
              <Link to={`/customer/update/${cus.cusId}`}>
              <i className="bi bi-pencil-square"></i>
              </Link>
            </h5>
          </div>

          <div className="card-body">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Name: </b>
                  </td>
                  <td className="ps-3">{cus.cusName}</td>
                </tr>
                <tr>
                  <td>
                    <b>Contact Number: </b>
                  </td>
                  <td className="ps-3">{cus.cusContactNo}</td>
                </tr>
                <tr>
                  <td>
                    <b>Email Address: </b>
                  </td>
                  <td className="ps-3">{cus.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       
      </div>
    </div> 
    
   );
};
 
export default Profile;