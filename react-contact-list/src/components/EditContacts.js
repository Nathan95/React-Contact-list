import React, { Component } from 'react';
import { connect } from 'react-redux';
import { detailsRef } from '../firebase';
import { createContact } from '../actions';
import ContactItemEdit from './ContactItemEdit';
import {Link} from 'react-router';


class EditContacts extends Component {

  componentDidMount(){
    detailsRef.on('value', snap => {
      let contacts = [];
      snap.forEach(contact => {

        const {email, firstname, lastname, address, phone} = contact.val();
        const serverKey = contact.key;
        contacts.push({email, firstname, lastname, address, phone, serverKey});

      })

      this.props.createContact(contacts);
    })
  }

  render(){
    return (
      <div>
      <strong> Update Contacts</strong>
        {
          this.props.contacts.map((contact, index) => {
            return (
              <ContactItemEdit key={index} contact={contact} />
            )
          })
        }
          <Link to={'/app'}>Back to contacts</Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  const {contacts} = state;
  return {
    contacts
  }
}

export default connect(mapStateToProps, {createContact})(EditContacts);
