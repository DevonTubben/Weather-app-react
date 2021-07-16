import React from 'react';
import { getCurrentWeather } from './../API/openweatherAPI'
 

// This is a class Component
class SearchBar extends React.Component{ 
    constructor(props){ 
        super(props)
        this.state = { 
            location: '',
            temperature: ''
        }
        getCurrentWeather("Detroit").then((res) => {
        console.log("res", res)
    }) 
}

    onInputChange(e){ 
        this.setState({ 
            location: e.target.value
        })
        console.log('called on input change', e.target.value);
            }

    onFormSubmit(e){ 
        e.preventDefault()

        getCurrentWeather(this.state.location)
        .then((res) => {
    })
}

    // render function is triggered whenever setting or updating
    // the state using the setState function
    render(){ 
        const location = this.state.location
        const temperature = this.state.temperature 

        return(
            <div> 
            <form onSubmit={(e) => this.onFormSubmit(e)}> 
               <button> 
                   Search
                </button> 
                <input 
                id="search" 
                name="search" 
                value={location} 
                onChange={e => this.onInputChange(e)}>
                </input>
                <p>
                    {temperature}
                </p>
            </form>
            </div>
        )
    }
}

export default SearchBar 