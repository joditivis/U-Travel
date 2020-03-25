import React, { Component } from "react";
import Axios from "axios";

class DestinationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destination: " ",
      editing: false,
           
    };

    this.initEditor();
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    
  }
   

  componentDidMount() {
      console.log("dest input: ", this.props.destination);
   
    }

  initEditor() {
    this.editor = (
      <input
        type="text"
        className="destination-input"
        defaultValue={this.props.destination}
        onKeyPress={event => {
          const key = event.which || event.keyCode;
          if (key === 13) {
            // if user hits the "enter" key, save input value
            this.save(event.target.value);
          }
        }}
        autoFocus={true}
      />
    );
  }

  edit() {
     this.setState({
      destination: this.state.destination,
      editing: true
    });
  }

  save(value) {  
      this.setState({
      destination: value,
      editing: false
    }); 
    
    // Axios.put(`/destination/${this.props.tripId}`,{
    //   destination: this.state.destination
  
    // }).then(res =>{
    //   if(this.state.destination!== res.data.destination){
    //     this.setState({destination: res.data.destination})
    //   }
    
    // });
   
  }



  componentDidUpdate() {
      console.log("dest CDUp: ",this.props.destination);
   
    this.initEditor();

    Axios.put(`/destination/${this.props.tripId}`,{
      destination: this.state.destination
  
    }).then(res =>{
      if(this.state.destination!== res.data.destination){
        this.setState({destination: res.data.destination})
      }
    
    });
  }

  render() {
    return this.state.editing ? (
      this.editor
    ) : (
      <p className="destination" onClick={this.edit}>
        {this.state.destination} <i className="fas fa-pen pencil"></i>
      </p>
    );
  }
}

export default DestinationInput;
