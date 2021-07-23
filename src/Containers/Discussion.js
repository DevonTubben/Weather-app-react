import React, { Component } from 'react' 
import Talk from '../Components/Talk'
import NewTalk from '../Components/NewTalk'

class Discussion extends Component { 
    constructor(){ 
        super()
        this.state = {
            Discussion: []
        }
    }

    componentDidMount(){ 
        fetch('http://localhost:3002/Discussion')
        .then(res => res.json())
        .then(Discussion => this.setState({ Discussion}))
    }
    render(){ 
        const talk = this.state.talk.map(talk => <Talk talk={talk} />)
        return ( 
            <div> 
                {talk}
                <NewTalk />
            </div>

        )
    }
}

export default Discussion; 