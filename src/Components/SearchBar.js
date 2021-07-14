import React from 'react'

// This is a class Component
class SearchBar extends React.Component{ 
    constructor(props){ 
        super(props)
        this.state = { 
            location: ''
        }
    //     setInterval(() => { 
    //     this.setState({ 
    //     location: 'my location'
    //     })
    //     },1000)
    }
    onInputChange(e){ 
        this.setState({ 
            location: e.target.value
        })
        console.log('called on input change', e.target.value);
            }

    // render function is triggered whenever setting or updating
    // the state using the setState function
    render(){ 
        const location = this.state.location

        return(
            <form> 
                {location}
               <button> 
                   Search
                </button> 
                <input 
                id="search" 
                name="search" 
                value={location} 
                onChange={e => this.onInputChange(e)}>

                </input>
            </form>
        )
    }
}

export default SearchBar 