import React from 'react'

class HogDetails extends React.Component {

    render(){
        let hog = this.props.hog
        return(
            <div>
                <h3>{hog.greased? 'Greased': 'Ungreased'}</h3>
                <h4>Highest Medal Achieved: {hog['highest medal achieved']}</h4>
                <p>Holy cow, this pig weighs {hog.weight} lbs!</p>
            </div>
        )
    }
}

export default HogDetails