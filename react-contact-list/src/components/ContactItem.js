import React, { Component } from 'react';
import { deleteContactRef, detailsRef } from '../firebase';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

class ContactItem extends Component {

deleteContact() {
//add to delete contacts on the db
//remove this contact from the contact detailsRef
  const { firstname, lastname, address, phone, serverKey} = this.props.contact;
    detailsRef.child(serverKey).remove();
    deleteContactRef.push({firstname, lastname, address, phone});
}

render() {
  const {firstname, lastname, address, phone} = this.props.contact;
    return (
      <div className="container" style={{margin:'5px'}}>
        <Table striped bordered condensed hover>
          <tbody>
            <tr>
              <td><strong>Firstname: </strong> {firstname}</td>
              <td><strong>Last name: </strong>{lastname}</td>
              <td><strong>Address: </strong>{address}</td>
              <td><strong>Phone: </strong>{phone}</td>
              <td><button onClick={() => this.deleteContact()} className="btn btn-sm btn-danger">Delete Contact</button></td>
            </tr>
          </tbody>
        </Table>
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
