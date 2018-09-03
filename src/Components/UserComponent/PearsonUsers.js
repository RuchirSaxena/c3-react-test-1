import React, { Component } from "react";
import User from "./Pearson";
import  removeDuplicateUsers  from "../../utility";
import { userDataApi } from  '../../Services/userDataApi' ;

const API_URL = 'https://reqres.in/api/users?page=1&per_page=10';

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isloading: false,
      error: null
    };

    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    userDataApi(API_URL)
      .then(response => {
        this.setState(() => {
          return {
            users: removeDuplicateUsers(response.data, "first_name", "last_name"),
            isLoading: false
          }
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  handleDeleteUser(id) {

    this.setState((prevState) => {
      return {
        users: prevState.users.filter((user) => {
          return user.id !== id;
        })
      }
    });
  }
  render() {
    if (this.state.isLoading) {
      return <div className="loader"></div>;
    }
    let userData = this.state.users.map((user) => {
      return <li key={user.id}> <User  {...user} handleDeleteUser={this.handleDeleteUser} /> </li>
    });
    return (
      <div className="pearon-users">
        <h1>Pearson User Management</h1>
        <div className="box1">
          {this.state.users.length > 0 &&
            <ul>
              {userData}
            </ul>
          }
          {this.state.users.length === 0 &&
            <h2>No records found</h2>
          }

        </div>
      </div>
    );
  }
}
