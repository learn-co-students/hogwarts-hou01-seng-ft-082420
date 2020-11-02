import React from "react";

class HogCard extends React.Component {
    state={
        isClicked: false
    }


    handleClick = () => {
        console.log('I be clicked')
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
  render() {
   
    let hogImage = () => {
        // to import our hog image: 
        // we need to format the name
        // then import THAT img
        // and pass that into src

        let {name} = this.props.hog //destructed name from props
        let formatName = name.toLowerCase().split(" ").join("_") //formatted our name to match jpg address
        let img = require(`../hog-imgs/${formatName}.jpg`) //used require function to get address imported using webpack
        return img //returning the address
    }
    return (
        
      <div onClick={this.handleClick}>
        <h1>Name: {this.props.hog.name}</h1>
        <img src={hogImage()}></img>
        
        {this.state.isClicked ? 
        <div>
        <h3>Specialty: {this.props.hog.specialty}</h3>
        <h3> Greased? {this.props.hog.greased ? 'greasy boi' : 'squeaky clean'}</h3>
        <h3> Weight: {this.props.hog.weight}</h3>
        <h3> Highest Medal Achieved: {this.props.hog['highest medal achieved']}</h3> 
        </div>
    : null }
        <br/>
      </div>
    );
  }
}

export default HogCard;
