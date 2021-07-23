import React, { Component } from 'react' 
import { Link } from 'react-router-dom'

class Talk extends Component { 
    render(){ 
        return( 
            <Link to={`/discussion/${this.props.discussion.id}`}>
                <div> 
                    {this.props.discussion.title}
                </div>
            </Link>
        )
    }
}

export default Talk