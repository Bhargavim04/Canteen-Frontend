import React from "react";
import { Link } from "react-router-dom";


const PaymentTable = (props) => {
  return (
    <div>
      {/* <Link to="/payment/add" className="btn btn-primary float-end mb-2 bg-danger">
        Add New
      </Link> */}
      <Link to="/paymentForm" className="btn btn-primary float-end mb-2 bg-danger">
        Transaction payment
      </Link>

      <table className="table bg-warning">
        <thead>
          <tr>
            <th>paymentId</th>
            <th>cardNo</th>
            <th>email</th>
            <th>totalPayment </th>
            <th>paymentType</th>
            <th>postalCode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.payments.map((payment) => (
            <tr key={payment.paymentId}>
              <td>{payment.paymentId}</td>
              <td>{payment.cardNo}</td>
              <td>{payment.email}</td>
              <td>{payment.totalPayment}</td>
              <td>{payment.paymentType}</td>
              <td>{payment.postalCode}</td>
              <td>
                <Link to={`/payment/update/${payment.paymentId}`}>
                  <i className="bi bi-arrow-repeat me-3"></i>
                </Link>
                <i
                  className="bi bi-trash-fill"
                  type="button"
                  onClick={() => props.handleDelete(payment.paymentId)}
                ></i>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;