import React from 'react'



export default class Hog extends React.Component{

    constructor(){
        super();
        this.state=({
            clicked: false,
            hidden: false
        })
    }


    handleDetails = () =>{ 
        this.setState({clicked: !this.state.clicked})
    }

    handleHide = () => {
        this.setState({hidden:!this.state.hidden,clicked: false})
    }


    getHogImage = () => {
        let formattedName = this.hog.name.split(' ').join('_').toLowerCase();
        console.log(formattedName)
        let picture = require(`../hog-imgs/${formattedName}.jpg`)
    }

    render(){

        const {hog} = this.props
        if (!this.state.hidden){
            return(
                <div className="ui eight wide column">

                    <div>
                        <img id="pigImage" src={this.getHogImage} />
                    </div>
                    <a class="header" onClick={this.handleDetails}>Name: {hog.name}</a>

                    {this.state.clicked ? 
                    <div>
                        <div>
                            <span>Weight: {hog.weight}lbs</span>
                        </div>      
                        <div>
                            <span>Greased?: {hog.greased ? 'Yes':'No'}</span>
                        </div>
                        <div>
                            <span>Specialty: {hog.specialty}</span>
                        </div>
                        <div>
                            Highest Medal: {hog['highest medal achieved']}
                        </div>
                        <div onClick={this.handleHide} style={{color:'red'}}>Hide Pig</div>
                    </div> 
                    :
                    null
                    }
                    <br></br>
                </div>
            );
        }
        return(<div className="ui eight wide column" onClick={this.handleHide}>Click to unhide pig</div>)
    }
}