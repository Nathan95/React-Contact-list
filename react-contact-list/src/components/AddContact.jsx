import React, {Component} from 'react';
import {connect} from 'react-redux';
import { detailsRef } from '../firebase';

class AddContact extends Component {

  constructor(props){
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      address: '',
      phone: ''

    }
  }

  addContact(){
    console.log("this.state", this.state);
    const { firstname } = this.state;
    const { lastname } = this.state;
    const { address } = this.state;
    const { phone } = this.state;
    const { email} = this.props.user;
    detailsRef.push({email: email, firstname, lastname, address, phone})
  }

  render(){
    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"
            placeholder="Firstname"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({firstname: event.target.value})}
        />


          <input
            type="text"
            placeholder="Lastname"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({lastname: event.target.value})}
        />

          <input
            type="text"
            placeholder="Address"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({address: event.target.value})}
        />


          <input
            type="text"
            placeholder="Phone"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({phone: event.target.value})}
        />

          <button
            className="btn btn-success"
            type="button"
            onClick={() => this.addContact()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
    return {
      user
    }
}

export default connect(mapStateToProps, null) (AddContact);
