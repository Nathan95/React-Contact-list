import React, { Component } from 'react';
import { deleteContactRef, detailsRef } from '../firebase';
import { connect } from 'react-redux'

class ContactItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      userIsEditing: false
    }
  }

  deleteContact() {
    //add to delete contacts on the db
    //remove this contact from the contact detailsRef
    const { email } = this.props.user;
    const { firstname, lastname, address, phone, serverKey} = this.props.contact;
    detailsRef.child(serverKey).remove();
    deleteContactRef.push({email, firstname, lastname, address, phone});
  }

  updateContact() {
    const { email } = this.props.user;
    const { firstname, lastname, address, phone, serverKey} = this.props.contact;
    deleteContactRef.push({email, firstname, lastname, address, phone});
  }

  toggleEditing() {
    let userIsEditing = !this.state.userIsEditing;
    this.setState({
      userIsEditing: userIsEditing
    })
    this.handleSave()
  }

  render() {
    const { email, firstname, lastname, address, phone} = this.props.contact;

    let userIsEditing = this.state.userIsEditing;
     if (userIsEditing) {
         return (
           <div>
              Firstname: <input value={firstname}/>
              Lastname: <input value={lastname}/>
              Address: <input value={address}/>
              Phone: <input value={phone}/>
             <button onClick={() => this.updateContact()}>Save</button>
             <button onClick={ this.toggleEditing }>Done</button>
           </div>
         )
     }

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

        <button
         onClick={ this.toggleEditing }
        className="btn btn-sm btn-primary">
        Edit
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
