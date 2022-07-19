import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getCustomerByIdAction } from '../actions/loginactions';

const ProfilePage = () => {
  
  const dispatch = useDispatch();
  const customer1 = useSelector((state) => state.login.customer);
  // Dispatch action to get product based on id at the of page loading
  useEffect(() => {
    dispatch(getCustomerByIdAction(customer1.cusId));
  }, []);

  console.log(customer1);
    return ( 
        <table className="table table-bordered table-success table-striped w-50 mx-auto">
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Contact No</th>
              <th>Email Id</th>
            </tr>
          </thead>
          <tbody>
            {customer1.map((cus) => (
              <tr key={cus.cusId}>
                <td>{cus.cusId}</td>
                <td>{cus.cusName}</td>
                <td>{cus.cusContactNo}</td>
                <td>{cus.login.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
     );
}
 
export default ProfilePage;