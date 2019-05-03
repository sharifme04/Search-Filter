import React, { Component } from 'react';
import axios from 'axios';
import Table from './components/Table';
import TableRow from './components/TableRow';
import UserForm from './components/UserForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       users:[],
          id:"",
          name:"",
          email:"",
          phone:"",
          company:"",
          city:"",
          zipcode:"",
          lat: "",
    }

   this.handleInputSearch = this.handleInputSearch.bind(this);
  }

  getUsers(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>this.setState({users:response.data}))
    .catch(error=>console.log(error))
  }

  handleInputSearch(event) {
     this.setState({
         [event.target.name]: event.target.value
     });
   }

  componentDidMount(){
    this.getUsers();
  }

render() {
   const {users, id, name, email, phone, city, company, zipcode, lat } = this.state;
    let currentUsers = users.filter(user => {
           return user.id.toString().indexOf( id.toString() ) !== -1 &&
                  user.name.toLowerCase().indexOf( name.toLowerCase() ) !== -1 &&
                  user.email.toLowerCase().indexOf( email.toLowerCase() ) !== -1 &&
                  user.phone.toLowerCase().indexOf( phone.toLowerCase() ) !== -1 &&
                  user.address.city.toLowerCase().indexOf( city.toLowerCase() ) !== -1 &&
                  user.company.name.toLowerCase().indexOf( company.toLowerCase() ) !== -1 &&
                  user.address.zipcode.toString().indexOf( zipcode.toString() ) !== -1 &&
                  user.address.geo.lat.toString().indexOf( lat.toString() ) !== -1
       })
       .map(user =>
            <TableRow key={user.id} user={user}/>
        )
    let userDetials ;
        if (currentUsers.length) {
          if (currentUsers.length === 1) {
            userDetials = <Table  currentUsers ={currentUsers }/>
           } else {
            userDetials = <p className="App-header"><b>Currently match</b> {currentUsers.length}</p>;
          }
        } else {
          userDetials = <p className="App-header"><b>Users are not available</b></p>;
        }
  return (
    <div className="container">
      <h1>React Search App</h1>
      <hr/>
      <h5>Only row will be visible when match 1 (for example ID: 10)</h5>
      <hr/>
      <div className="row" >
        <UserForm handleInputSearch = {this.handleInputSearch}/>
      </div>
      <hr/>
       {userDetials}
    </div>
  );
 }
}

export default App;
