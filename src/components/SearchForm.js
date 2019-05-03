import React, { Component } from 'react';

class SearchForm extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
      <div className="col-md-3">
        <div className="input-group">
            <input
            type="text"
            className="form-control"
            placeholder="Search by ID "
            name="id"
            onChange={this.props.handleInputSearch}
            />
        </div>
       </div>
       <div className="col-md-3">
         <div className="input-group">
             <input
             type="text"
             className="form-control"
             placeholder="Search by Name "
             name="name"
             onChange={this.props.handleInputSearch}
             />
         </div>
        </div>
       <div className="col-md-3">
         <div className="input-group">
             <input
             type="text"
             className="form-control"
             placeholder="Search by Phone "
             name="phone"
             onChange={this.props.handleInputSearch}
             />
         </div>
        </div>
        <div className="col-md-3">
          <div className="input-group">
              <input
              type="text"
              className="form-control"
              placeholder="Search Lat "
              name="lat"
              onChange={this.props.handleInputSearch}
              />
          </div>
         </div>
      </form>
    );
  }

}

export default SearchForm;
