import React, { Component } from 'react';
import axios from 'axios';
// import { render } from 'react-router-dom';


class CreateTodo extends Component {

    state = {
        date: Date,
        task: ''
    }

handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState( { [name]: value} );
}

handleFormSubmit = (event) => {
     event.preventDefault();

    const {date, task} =this.state 

    axios.post(
        `http://localhost:4000/api/v1/todos`,
        { task })

        .then( (results) => {
            console.log(results)
            this.setState(
                { task: ''}
            );
        })
        .catch( (err) => console.log(err) )
}


render() {

    return(
        <div>
<form onSubmit={this.handleFormSubmit}>
<label>To DO: </label>
<input type= "text" name="task" onChange={this.handleChange} 
value= {this.state.task} />

<button type="submit"> Create List</button>

</form>
</div>
    )
}
}

export default CreateTodo;