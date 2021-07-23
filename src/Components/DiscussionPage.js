import React, { Component } from 'react'

class DiscussionPage extends Component { 
    render(){ 
        return(
            <div>
                <h1> 
                    {this.props.discussion.title}
                </h1>
                <p> 
                    {this.props.discussion.description}
                </p>
            </div>
        )
    }
}

export default DiscussionPage;