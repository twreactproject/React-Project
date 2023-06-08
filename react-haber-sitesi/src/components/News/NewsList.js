import { Component } from "react";
import { Card,CardBody, CardTitle, CardSubtitle,CardText,Button,Row,Col } from "reactstrap";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import * as newsActions from "../../redux/actions/newsActions";
class NewList extends Component{
  componentDidMount(){
    this.props.actions.getNews();
  }
    render(){
      
        return(
            <div>
                <h1>New List</h1>
                <Row>
    {this.props.news.map((news)=>(<Col className="col-4 mt-4">
      <Card className="w-100"
  style={{
    width: '18rem'
  }}
  key={news.key}
>
  <img
    alt="Sample"
    src={news.image}
  />
  <CardBody>
    <CardTitle tag="h5">
      {news.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {news.name}
    </CardSubtitle>
    <CardText>
    {news.description.length>37?(news.description.substring(0,37)+"..."):news.description}
    </CardText>
    <Button>
      Detay
    </Button>
  </CardBody>
</Card></Col>
))} </Row>            </div>
        )
        }
}

function mapStateToProps(state){
  return {
      news:state.newsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return{
      actions:{
          getNews:bindActionCreators(newsActions.getNews,dispatch),
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewList)