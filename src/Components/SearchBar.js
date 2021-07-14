import React from 'react'

// This is a class Component
class SearchBar extends React.Component{ 
    constructor(props){ 
        super(props)
        this.state = { 
            location: ''
        }
    }

    render(){ 
        const location = this.state.location

        return(
            <form> 
                {location}
               <button> 
                   Search
                </button> 
                <input id="search" name="search">

                </input>
            </form>
        )
    }
}

export default SearchBar 