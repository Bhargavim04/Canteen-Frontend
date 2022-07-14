import React, { Component } from 'react';

class ViewAddress extends Component {
    state = { 
        addresses:[
            {
                houseNo: 56,
                street: "Yelahanka",
                city: "Bangalore",
                state: "karnataka",
                pincode: 560064
            },
            {
                houseNo: 834,
                street: "Ramnagar",
                city: "Chennai",
                state: "Tamilnadu",
                pincode: 562200
            },
            {
                houseNo: 2875,
                street: "Malleshwaram",
                city: "Bangalore",
                state: "karnataka",
                pincode: 560005
            },
        ]
     } 
    render() { 
        return (
        <div>
        <h1>Addresses</h1>
        <table className="table table-bordered table-warning table-striped w-50 mx-auto">
          <thead>
            <tr>
              <th>House No</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
            </tr>
          </thead>
          <tbody>
            {this.state.addresses.map((address) => (
              <tr>
                <td>{address.houseNo}</td>
                <td>{address.street}</td>
                <td>{address.city}</td>
                <td>{address.state}</td>
                <td>{address.pincode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        );
    }
}
 
export default ViewAddress;