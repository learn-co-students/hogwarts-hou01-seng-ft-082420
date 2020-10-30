import React from 'react'

export default class HogCard extends React.Component{

constructor(){
    super()
    this.state = {
        display: false,
    }
}
    handleClick = () => {
        console.log("pig tile clicked")
        this.setState({display: !this.state.display})
    }



    render(){
        let {hog} = this.props
        let pigImage = require(`../hog-imgs/${hog.name.toLowerCase().split(' ').join('_')}.jpg`)
        console.log(pigImage)
        return(
            <div className ='ui eight wide column pigTile'>
                <div style={this.props.hiddenHogs.includes(hog)? {visibility: 'hidden'} : null }  onClick={(this.handleClick)}>
                <h3>{hog.name}</h3>
                <img src= {pigImage} alt={hog.name} style={{height: '180px'}}/>
                <p>{this.state.display ? hog.specialty: null}</p>
                <p>{this.state.display ? hog.weight : null}</p>
                <p>{this.state.display ? (hog.greased ? "GREESE" : "NO GREASE") : null}</p>
                </div>
                <div>
                <button onClick={()=>this.props.hideThatPig(hog)}>Hide Pig</button>
                </div>
            
            </div>
        )
    }
}