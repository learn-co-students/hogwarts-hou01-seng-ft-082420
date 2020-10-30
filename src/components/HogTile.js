import React, { Component } from "react";
import Babe from "../hog-imgs/babe.jpg"

class HogTile extends Component {

    constructor() {
        super()
        this.state = {
            class: "hidden"
        }
    }

    getPic = (name) => {
        let imageName = name.split(' ').join("_").toLowerCase()
        let pigImage = require(`../hog-imgs/${imageName}.jpg`)
        return pigImage
    }

    toggleDetails = () => {
        if (this.state.class === "hidden") {
            this.setState({
                class: ""
            })
        } else {
            this.setState({
                class: "hidden"
            })
        }
    }


    render() {
        return (
            <div onClick={this.toggleDetails} className="ui eight wide column">
                <h2>{this.props.hog.name}</h2>
                <img className='pig-image' src={this.getPic(this.props.hog.name)} />
                <ul className={this.state.class}>
                    <li>Specialty: {this.props.hog.specialty}</li>
                    <li>Greased: {this.props.hog.greased.toString()}</li>
                    <li>Weight: {this.props.hog.weight}</li>
                    <li>Highest Achievement: {this.props.hog["highest medal achieved"]}</li>
                </ul>
            </div>

        )
    }
}

export default HogTile;