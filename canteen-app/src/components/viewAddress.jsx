import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getAllAddressesAction } from '../actions/addressactions';

const ViewAddress = () => {
    const dispatch = useDispatch();
  //useEffect(func, [conditional stmt])
  // dispatches getAllAddressesAction at the time of page loading
  useEffect(() => {
    dispatch(getAllAddressesAction());
  }, []);

  // get addresses info from redux store
  const addr = useSelector((state) => state.address.addresses);
  console.log(addr);
        return (
        <div>
        <h1>Addresses</h1>
        <table className="table table-bordered table-warning table-striped w-50 mx-auto">
          <thead>
            <tr>
              <th>Address Id</th>
              <th>House No</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Customer Id</th>
            </tr>
          </thead>
          <tbody>
            {addr.map((address) => (
              <tr>
                <td>{address.addrId}</td>
                <td>{address.houseNo}</td>
                <td>{address.street}</td>
                <td>{address.city}</td>
                <td>{address.state}</td>
                <td>{address.pinCode}</td>
                <td>{address.cusId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        );
    };
 
export default ViewAddress;