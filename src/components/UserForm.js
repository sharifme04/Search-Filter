import React  from 'react';
import PropTypes from 'prop-types';

const UserForm = (props) => (
      <form className="form-horizontal">
       <div className="form-group">
        <label className="col-sm-2 control-label">ID</label>
           <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by ID "
              name="id"
              onChange={props.handleInputSearch}
              />
           </div>
        </div>
      <div className="form-group">
       <label className="col-sm-2 control-label">Name</label>
          <div className="col-sm-4">
           <input
             type="text"
             className="form-control"
             placeholder="Search by name "
             name="name"
             onChange={props.handleInputSearch}
             />
          </div>
          </div>
        <div className="form-group">
         <label className="col-sm-2 control-label">Email</label>
            <div className="col-sm-4">
             <input
               type="text"
               className="form-control"
               placeholder="Search by email "
               name="email"
               onChange={props.handleInputSearch}
               />
            </div>
          </div>
       <div className="form-group">
        <label className="col-sm-2 control-label">phone</label>
           <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by phone "
              name="phone"
              onChange={props.handleInputSearch}
              />
           </div>
        </div>
        <div className="form-group">
         <label className="col-sm-2 control-label">Company</label>
          <div className="col-sm-4">
             <input
               type="text"
               className="form-control"
               placeholder="Search by company name "
               name="company"
               onChange={props.handleInputSearch}
               />
            </div>
        </div>
        <div className="form-group">
         <label className="col-sm-2 control-label">City</label>
          <div className="col-sm-4">
             <input
               type="text"
               className="form-control"
               placeholder="Search by City "
               name="city"
               onChange={props.handleInputSearch}
               />
            </div>
        </div>
        <div className="form-group">
         <label className="col-sm-2 control-label">ZipCode</label>
          <div className="col-sm-4">
             <input
               type="text"
               className="form-control"
               placeholder="Search by Zipcode "
               name="zipcode"
               onChange={props.handleInputSearch}
               />
            </div>
        </div>
        <div className="form-group">
         <label className="col-sm-2 control-label">Latitude</label>
          <div className="col-sm-4">
             <input
               type="text"
               className="form-control"
               placeholder="Search by Lat "
               name="lat"
               onChange={props.handleInputSearch}
               />
            </div>
        </div>
      </form>
    );

  UserForm.propTypes = {
        handleInputSearch: PropTypes.func.isRequired,
    };
export default UserForm;
