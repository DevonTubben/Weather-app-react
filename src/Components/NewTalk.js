import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'

class NewTalk extends Component { 
    render(){ 
        return( 
            <Link to={'/Discussion/new'}> 
            <button> Talk </button>
            </Link>
        )
    }
}
export default NewTalk 