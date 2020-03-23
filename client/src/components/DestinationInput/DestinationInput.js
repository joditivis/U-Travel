import React, { Component } from 'react';


class DestinationInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            destination: 'Hawaii',
            editing: false
        };

        this.initEditor();
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    initEditor() {
        this.editor = <input   
                        type='text' 
                        className='destination-input'
                        defaultValue={this.state.destination} 
                        onKeyPress={(event) => {
                            const key = event.which || event.keyCode;
                            if (key === 13) { // if user hits the "enter" key, save input value
                                this.save(event.target.value)
                            }
                        }} autoFocus={true}
                      />
    }

    edit() {
        this.setState({
            destination: this.state.destination,
            editing: true
        })
    };

    save(value) {
        this.setState({
            destination: value,
            editing: false
        })
    };

    componentDidUpdate() {
        this.initEditor();
    }

    render() {
        return this.state.editing ? this.editor : <p className='destination' onClick={this.edit}>{this.state.destination}  <i className="fas fa-pen pencil"></i></p>
    };
}

export default DestinationInput;