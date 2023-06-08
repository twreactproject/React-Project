import { Component } from "react";

export default class Media extends Component{
    render(){
        return(
            <div className="media">
                <img src={this.props.src} alt={this.props.alt}/>
            </div>
        )
        }
}