import { store } from "../index";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomerByEmailAction } from "../actions/loginactions";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
 
const NewProfile = () => {
  const dispatch = useDispatch();
  // get login info from store
  const login = useSelector((state) => state.custstore.login);
  // get cust details based on email using dispatch action
  useEffect(() => {
    const email = store.getState().custstore.login.email;
    dispatch(getCustomerByEmailAction(email));
  }, []);
  // get cust details from store
  const cus = useSelector((state) => state.custstore.customer);
  const navigate = useNavigate();
   // Delete address
  const handleDelete = (addrId) => {
    axios
      .delete(`http://localhost:8081/address/${addrId}`)
      .then((res) => {
        console.log(res);
        // return all customers except cus which is selected for delete
        // const custs = this.state.customers.filter((cus) => cus.cusId != cusId);

        // // update state object with customers
        // this.setState({ customers: custs });
        // alert("Customer with cusId " + cusId + " deleted successfully!");

        const address = cus.address.filter((addr) => addr.addrId != addrId);
        navigate("/foodItems");
        this.state({ cus: address });
        alert("Address deleted successfully!");
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="card w-50 mx-auto">
          <div className="d-flex justify-content-between card-header">
            <h5 data-testid="title">Personal Details</h5>
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
              </tbody>
            </table>
          </div>
        </div>
          {cus.address &&
        <div className="card w-50 mx-auto mt-3">
          <div className="d-flex justify-content-between card-header">
            <h5>Address<i class="bi bi-house-heart-fill"></i></h5>
            <h5>
              <Link to="/address/add">
                <i class="bi bi-file-plus"></i>
              </Link>
              {/* <i className="bi bi-trash3 ms-2" type="button"></i> */}
            </h5>
          </div>
          
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
                  <td className="ps-3">{addr.pinCode}
                  <i className="bi bi-trash3-fill" type="button"
                  onClick={() => handleDelete(addr.addrId)} ></i>
                  </td>
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
        </div>     
        }
      </div>
    </div> 
  )
}
export default NewProfile;