import React, { Component } from 'react';
import { deleteContactRef, detailsRef } from '../firebase';
import { connect } from 'react-redux';

class ContactItem extends Component {

  deleteContact() {
    //add to delete contacts on the db
    //remove this contact from the contact detailsRef
    const { email } = this.props.user;
    const { firstname, lastname, address, phone, serverKey} = this.props.contact;
    detailsRef.child(serverKey).remove();
    deleteContactRef.push({email, firstname, lastname, address, phone});
  }

  render() {
    const { email, firstname, lastname, address, phone} = this.props.contact;

    return (

      <div style={{margin:'5px'}}>
        <strong>Firstname:</strong> {firstname}
        <strong>Lastname:</strong> {lastname}
        <strong>Address:</strong> {address}
        <strong>Phone:</strong> {phone}
        <strong>Added by:</strong>{email}

        <button
          onClick={() => this.deleteContact()}
          className="btn btn-sm btn-danger"
        >
        Delete
        </button>

      </div>
    )
  }
}

function mapStateToProps(state){
  const {user} = state;
    return {
      user
    }
}


export default connect(mapStateToProps, null)(ContactItem);
