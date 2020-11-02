import React from 'react'

export default class Filter extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.greasy}>click for greasy bois only</button>
                <button onClick={this.props.reset}>click to reset our hogs</button>
                <button onClick={this.props.sortByName}>click to sort by name</button>
                <button onClick={this.props.sortByWeight}>click to sort by Weight</button>
                
            </div>
        )
    }
}