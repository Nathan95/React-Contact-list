import React, { Component } from 'react';
import { detailsRef } from '../firebase';
import { connect } from 'react-redux';

class ContactItem extends Component {

  constructor(props){
    super(props);

    //get values from db
    const { firstname, lastname, address, phone, serverKey} = this.props.contact;

    this.state = {
      efirstname: firstname,
      elastname: lastname,
      eaddress: address,
      ephone: phone
    }
  }

  editContact() {
    //edit contacts my ref in the db
    const{ efirstname, elastname, eaddress, ephone} = this.state;
    const { firstname, lastname, address, phone, serverKey} = this.props.contact;

    detailsRef.child(serverKey).update({ firstname: efirstname, lastname: elastname, address: eaddress, phone: ephone, serverKey});
  }

  render() {

    return (

      <div style={{margin:'5px'}}>

      Current firstname: <input value={this.state.efirstname}  onChange={event => this.setState({efirstname: event.target.value})} />
      Current lastname: <input value={this.state.elastname}  onChange={event => this.setState({elastname: event.target.value})} />
      Current address: <input value={this.state.eaddress} onChange={event => this.setState({eaddress: event.target.value})} />
      Current phone number: <input value={this.state.ephone} onChange={event => this.setState({ephone: event.target.value})} />

        <button
          onClick={() => this.editContact()}
          className="btn btn-sm btn-danger"
        >
        Update
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
