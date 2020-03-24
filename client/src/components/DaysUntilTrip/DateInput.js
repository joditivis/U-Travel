import React, { Component } from 'react';


class DateInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "MM/DD/YYYY",
            editing: false
        };

        this.initEditor();
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    initEditor() {
        this.editor = <input   
                        type='text' 
                        className='date-change-input'
                        defaultValue={this.state.date} 
                        onKeyPress={(event) => {
                            const key = event.which || event.keyCode;
                            if (key === 13) { // if user hits the "enter" key, save input value
                                this.save(event.target.value);
                                this.props.handleInputChange(event.target.value);
                            }
                        }} autoFocus={true}
                      />
    }

    edit() {
        this.setState({
            date: this.state.date,
            editing: true
        })
    };

    save(value) {
        this.setState({
            date: value,
            editing: false
        })
    
    };

    componentDidUpdate() {
        this.initEditor();
    }

    render() {
        return this.state.editing ? this.editor : <p className='vacation-date' onClick={this.edit}>{this.state.date}  <i className="fas fa-pen pencil"></i></p>
    
    };
}

export default DateInput;