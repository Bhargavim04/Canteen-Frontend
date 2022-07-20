import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {

  const login = useSelector((state) => state.login.login);
  console.log(login);
  const [cus, setCus] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8081/customer/email/${login.email}`)
      .then((res) => setCus(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(cus);
  return ( 
    <div>
      <div className="container mt-5">
        <div className="card w-50 mx-auto">
          <div className="d-flex justify-content-between card-header">
            <h5>Personal Details</h5>
            <h5>
              <i className="bi bi-pencil-square"></i>
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

          <div className="card-body">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>House Number: </b>
                  </td>
                  <td className="ps-3">{cus.address[0].houseNo}</td>
                </tr>
                <tr>
                  <td>
                    <b>Street:</b>
                  </td>
                  <td className="ps-3">{cus.address[0].street}</td>
                </tr>
                <tr>
                  <td>
                    <b>City: </b>
                  </td>
                  <td className="ps-3">{cus.address[0].city}</td>
                </tr>
                <tr>
                  <td>
                    <b>State: </b>
                  </td>
                  <td className="ps-3">{cus.address[0].state}</td>
                </tr>
                <tr>
                  <td>
                    <b>Pin Code: </b>
                  </td>
                  <td className="ps-3">{cus.address[0].pinCode}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}

      </div>
    </div>
    
   );
};
 
export default Profile;