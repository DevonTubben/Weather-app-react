import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

class Talk extends Component { 
    render(){ 
        return( 
            <Link to={`/Discussion/${this.props.talk.id}`}>
                <h1> 
                    {this.props.talk.title}
                </h1>
            </Link>
        )
    }
}

export default Talk