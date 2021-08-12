import React from 'react';
//import { getCurrentWeather } from './../API/openweatherAPI'
 

// This is a class Component
class SearchBar extends React.Component{ 
    constructor(props){ 
        super(props)
}

    onInputChange(e){ 
        // this.setState({ 
        //     location: e.target.value
        // })
        // console.log('called on input change', e.target.value);
        this.props.inputChange(e)
            }

    onFormSubmit(e){ 
        e.preventDefault()
        this.props.formSubmitted()
        // getCurrentWeather(this.state.location)
        // .then((res) => {
        // this.setState({ 
        //     temperature: res.data.main.temp
        // })
    // })
}

    // render function is triggered whenever setting or updating
    // the state using the setState function
    render(){ 
         const location = this.props.location
 

        return(
            <div className="search-bar"> 
            <form className="search-bar_form" onSubmit={(e) => this.onFormSubmit(e)}> 
               <button className="search-bar_button"> 
                   Search
                </button> 
                <input 
                id="search" 
                name="search" 
                placeholder="City.."
                value={location} 
                className="search-bar_input"
                onChange={e => this.onInputChange(e)}>
                </input>
            </form>
            </div>
        )
    }
}

export default SearchBar 