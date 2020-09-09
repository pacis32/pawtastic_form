import React, { Component } from "react";

export default class Petbasics extends React.Component {

  
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  onchange = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      Name: "",
      Breed: "",
      Gender: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form>
        <input
          name="Name"
          placeholder="name"
          value={this.state.Name}
          // onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Breed"
          placeholder="breed"
          value={this.state.breed}
          // onChange={e => this.change(e)}
        />
        <input
          name="Birthday"
          placeholder="M/D/Y"
          value={this.state.birthday}
          // onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Gender"
          placeholder="gender"
          value={this.state.gender}
          // onChange={e => this.change(e)}
        />
         <input
          name="Spayed or Neutered"
          onSelect=""
          placeholder=""
          value={this.state.stayed}
          // onChange={e => this.change(e)}
        />
        
        <br />
        <button onClick={e => this.onSubmit(e)}>Back</button>
        <button onClick={e => this.onSubmit(e)}>Next</button>
      </form>
    );
  }
}