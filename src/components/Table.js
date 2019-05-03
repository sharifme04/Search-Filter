import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => (
  <div className="table-responsive">
    <table className="table table-hover">
        <thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Latitude</th>
        </tr>
        </thead>
        <tbody>
          {props.currentUsers}
        </tbody>
    </table>
  </div>
 );

 Table.propTypes = {
     currentUsers: PropTypes.array.isRequired,
 };


export default Table;
