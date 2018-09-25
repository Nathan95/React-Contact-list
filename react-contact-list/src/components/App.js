import React, {Component} from 'react';
import { connect } from 'react-redux';
import {firebaseApp} from '../firebase';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { Link } from 'react-router';

class App extends Component {

  signOut(){
    firebaseApp.auth().signOut();
  }

  render(){
    return (
      <div style={{margin: '5px'}}>
        <h3>Contacts</h3>

        <div> Add Contacts </div>

        <AddContact />
        Contact List:
        <ContactList />
      
        <Link to= "/edit"> Edit Contacts </Link>
        <br />
        <button
          className="btn btn-danger"
          onClick={() => this.signOut()}
        >
        Sign out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, null)(App);
