import React, { Component } from 'react';
import { connect } from 'react-redux';
import { detailsRef } from '../firebase';
import { createContact } from '../actions';
import ContactItem from './ContactItem';


class ContactList extends Component {

  componentDidMount(){
    detailsRef.on('value', snap => {
      let contacts = [];
      snap.forEach(contact => {
          let contactObject = contact.val();
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
        {
          this.props.contacts.map((contact, index) => {
            return (
              <ContactItem key={index} contact={contact} />
            )
          })
        }
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

export default connect(mapStateToProps, {createContact})(ContactList);
