import { Component } from "react";

class Media extends Component{
    render(){
        return(
            <div className="media">
                <img src={this.props.src} alt={this.props.alt}/>
            </div>
        )
        }
}

export default Media