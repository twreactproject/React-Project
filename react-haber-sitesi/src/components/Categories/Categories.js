import React ,{Component} from "react";
import { ListGroup, ListGroupItem,Badge } from "reactstrap";
export default class Categories extends Component {
    state={
        currentCategory:"Milliyet"
    }
    selectCategory=(category)=>{
        this.setState({currentCategory:category.name});
        }
    render() {
        const categories=[
            { name: 'Milliyet',source:"milliyet"},
            { name: 'Sabah',source:"sabah"},
            { name: 'Cumhuriyet',source:"cumhuriyet"},
            { name: 'Fanatik',source:"fanatik"},
            { name: 'Fotomaç',source:"fotomac"},
            { name: 'Akşam',source:"aksam"},
        ]
        return (
            <div>
                 <div>
            <h2><Badge color="warning w-100">Haberler</Badge></h2>
            <ListGroup>
                {categories.map((category)=>(
                    <ListGroupItem active={category.name===this.state.currentCategory?true:false}
                    onClick={()=>this.selectCategory(category)}
                    key={category.source}>
                        {category.name}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
            </div>
        )
    }
}