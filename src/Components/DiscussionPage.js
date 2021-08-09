import React, { Component } from 'react'
 // stories = discussion
    // story = talk

class DiscussionPage extends Component { 
    render(){ 
        const talk = this.props.discussion.find(talk => talk.id == this.props.match.params.id)

        if(talk){
        return(
            <div>
                <h1> 
                    {talk.title}
                </h1>
                <p> 
                    {talk.summary}
                </p>
            </div>
        )
        } else { 
            return <div> Not working</div>
        }
    }
}

export default DiscussionPage;