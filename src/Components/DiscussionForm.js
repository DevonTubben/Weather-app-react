import React, { Component } from 'react' 
import { withRouter } from 'react-router-dom'

class DiscussionForm extends Component { 
    constructor(){ 
        super()
        this.state= { 
            title: '',
            summary: ''
        }
    }

    handleChange = (e) => { 
        this.setState({ 
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        fetch(`http://localhost:3000/Discussion`, { 
            method: 'POST', 
            headers: { 
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                title: this.state.title, 
                summary: this.state.summary
            })
        }).then(res => res.json())
          .then(talk => {
            this.props.addTalk(talk)
            this.props.history.push(`/Discussion/${talk.id}`)
        })
        
    }

    render(){ 
        return(
        <div>
            <form onSubmit={this.handleSubmit}> 
                <label> Title: </label><br/>
                <input type="text" name="title" onChange={this.handleChange}/><br/>
                <label> Share your thoughts: </label><br/>
                <textarea type="text" name="summary" onChange={this.handleChange}/><br/>
                <button type="submit">Submit</button><br/>
            </form>
        </div>
        )
    }
}

export default withRouter (DiscussionForm);