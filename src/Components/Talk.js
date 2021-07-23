import React, { Component } from 'react' 

class Talk extends Component { 
    render(){ 
        return( 
            <div> 
                {this.props.discussion.title}
            </div>
        )
    }
}

export default Talk