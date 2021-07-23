import React, { Component } from 'react'

class DiscussionPage extends Component { 
    render(){ 
        const discussion = this.props.discussion.find(discussion => discussion.id == this.props.match.params.id)

        if(discussion){
        return(
            <div>
                <h1> 
                    {discussion.title}
                </h1>
                <p> 
                    {discussion.description}
                </p>
            </div>
        )
        } else { 
            return <div> Not working</div>
        }
    }
}

export default DiscussionPage;