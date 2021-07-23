import React, { Component } from 'react' 
import { withRouter } from 'react-router-dom'

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

    handleSubmit = (e) => { 
        e.preventDefault()
        fetch(`http://localhost:3002/discussion`, { 
            method: 'POST', 
            headers: { 
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                title: this.state.title, 
                description: this.state.description 
            })
        }).then(res => res.json())
        .then(discussion => {
            this.props.addPost(discussion)
            this.props.history.push(`/discussion/${discussion.id}`)
        })
        
    }

    render(){ 
        return(
        <div>
            <form onSubmit={this.handleSubmit}> 
                <label> Title: </label><br/>
                <input type="text" name="title" onChange={this.handleChange}/><br/>
                <label> Share your thoughts: </label><br/>
                <textarea type="text" name="description" onChange={this.handleChange}/><br/>
                <button type="submit">Submit</button><br/>
            </form>
        </div>
        )
    }
}

export default withRouter (DiscussionForm);