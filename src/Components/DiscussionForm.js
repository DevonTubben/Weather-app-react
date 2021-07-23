import React, { Component } from 'react' 

class DiscussionForm extends Component { 
    constructor(){ 
        super()
        this.state= { 
            title: '',
            description: ''
        }
    }

    handleChange = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    render(){ 
        return(
        <div>
            <form> 
                <label> Share your thoughts: </label><br/>
                <input type="text" name="title" onChange={this.handleChange}/><br/>
                <textarea type="text" name="description" onChange={this.handleChange}/><br/>
            </form>
        </div>
        )
    }
}

export default DiscussionForm;