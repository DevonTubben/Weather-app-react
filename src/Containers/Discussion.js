import React, { Component } from 'react' 
import Talk from '../Components/Talk'
import NewTalk from '../Components/NewTalk'

class Discussion extends Component { 
    constructor(){ 
        super()
        this.state = {
            discussion: []
        }
    }

    // componentDidMount(){ 
    //     fetch('http://localhost:3002/Discussion')
    //     .then(res => res.json())
    //     .then(discussion => this.setState({ discussion}))
    // }
    // stories = discussion
    // story = talk

    render(){ 
        const discussion = this.state.discussion.map(talk => <Talk talk={talk} />)
        return ( 
            <div> 
                {discussion} 
            <p> 
                <NewTalk />
            </p>
            </div>

        )
    }
}

export default Discussion; 