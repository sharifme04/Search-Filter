import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => (
  <tr>
    <td>{props.user.id}</td>
    <td>{props.user.name.split(' ').shift()}</td>
    <td>{props.user.name}</td>
    <td>{props.user.email}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.company.name}</td>
    <td>{props.user.address.city}</td>
    <td>{props.user.address.zipcode}</td>
    <td>{props.user.address.geo.lat}</td>
  </tr>
 );
 TableRow.propTypes = {
   id:PropTypes.number,
   name: PropTypes.string,
   email: PropTypes.string,
   phone:PropTypes.number,
   company: PropTypes.object,
   city: PropTypes.string,
   zipcode: PropTypes.number,
   geo: PropTypes.object
 };

 export default TableRow;
