import React from 'react';
import {Link} from 'react-router-dom';

const CustomerTable = (props) => {
    return ( 
        <table className="table table-bordered table-success table-striped w-50 mx-auto">
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Contact No</th>
              <th>Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.customers.map((cus) => (
              <tr key={cus.cusId}>
                <td>{cus.cusId}</td>
                <td>{cus.cusName}</td>
                <td>{cus.cusContactNo}</td>
                <td>{cus.login.email}</td>
                <td>
                  <Link to={`/customer/update/${cus.cusId}`}>
                    <i className="bi bi-arrow-repeat me-3"></i>
                  </Link>
                  <i className="bi bi-trash3-fill" type="button"
                  onClick={() => props.handleDelete(cus.cusId)} ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     );
}
 
export default CustomerTable;