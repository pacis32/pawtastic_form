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
  
    this.setState({
      Name: "",
      Breed: "",
      Gender: "",
      upload: "",
      birthday: "",
      Spayed: "",
      weight:""
    });
    this.props.onChange({
      Name: "",
      Breed: "",
      Gender: "",
      upload: "",
      birthday: "",
      Spayed: "",
      weight:""
    });
  };

  render() {
    return (
      <form>
        <input
          name="Name"
          placeholder="name"
          value={this.state.Name}
          
        />
        <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        
      />
        <br />
        <input
          name="Breed"
          placeholder="breed"
          value={this.state.breed}
          
        />
        <input
          name="Birthday"
          placeholder="M/D/Y"
          value={this.state.birthday}
          
        />
        <br />
        <input
          name="Gender"
          placeholder="gender"
          value={this.state.gender}
         
        />
         <input
          name="Spayed or Neutered"
          onSelect=""
          placeholder=""
          value={this.state.stayed}
          
        />
        
        <br />
        <button onClick={e => this.onSubmit(e)}>Back</button>
        <button onClick={e => this.onSubmit(e)}>Next</button>
      </form>
    );
  }
}