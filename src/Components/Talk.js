import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

class Talk extends Component { 
    render(){ 
        return( 
            <Link to={`/discussion/${this.props.talk.id}`}>
                <div> 
                    {this.props.talk.title}
                </div>
            </Link>
        )
    }
}

export default Talk