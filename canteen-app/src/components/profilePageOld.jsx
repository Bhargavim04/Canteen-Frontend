import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomerByEmailAction } from "../actions/loginactions";
import { Link } from "react-router-dom";

const Profile = () => {

  const dispatch = useDispatch();
  const login = useSelector((state) => state.custstore.login);
  dispatch(getCustomerByEmailAction(login.email));

  const cus = useSelector((state) => state.customer.customer);
  //console.log(cus);
  const address = useSelector((state)=> state.customer.customer.address);
  //console.log(address);

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
                  <td className="ps-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        
         {/* <div className="card w-50 mx-auto mt-3">
          <div className="d-flex justify-content-between card-header">
            <h5>Address<i class="bi bi-house-heart-fill"></i></h5>
            <h5>
              <Link to="#">
                <i className="bi bi-pencil-square"></i>
              </Link>
              <i className="bi bi-trash3 ms-2" type="button"></i>
            </h5>
          </div>
          {cus.address.length<=0 ?
          <Link to="#" className="btn btn-primary mb-2">
          Add New Address
          </Link>
          :
           <div className="card-body">
            {cus.address.map((addr)=>(
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>House Number: </b>
                  </td>
                  <td className="ps-3">{addr.houseNo}</td>
                </tr>
                <tr>
                  <td>
                    <b>Street:</b>
                  </td>
                  <td className="ps-3">{addr.street}</td>
                </tr>
                <tr>
                  <td>
                    <b>City: </b>
                  </td>
                  <td className="ps-3">{addr.city}</td>
                </tr>
                <tr>
                  <td>
                    <b>State: </b>
                  </td>
                  <td className="ps-3">{addr.state}</td>
                </tr>
                <tr>
                  <td>
                    <b>Pin Code: </b>
                  </td>
                  <td className="ps-3">{addr.pinCode}</td>
                </tr>
                <tr>
                  <td>
                    <hr />
                  </td>
                  <td >
                    <hr />
                  </td>
                </tr>
              </tbody>
            </table>
            ))}
          </div>
        }
        </div>      */}
    


      </div>
    </div> 
    
   );
};
 
export default Profile;