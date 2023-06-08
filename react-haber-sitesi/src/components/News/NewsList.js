import { Component } from "react";
import { Card,CardBody, CardTitle, CardSubtitle,CardText,Button,Row,Col } from "reactstrap";
export default class NewList extends Component{
    render(){
      const items = [
        {
          image: 'https://picsum.photos/id/123/1200/400',
          name: 'Başlık',
          description: 'Açıklamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          key: 1,
          source:"Cumhuriyet",
          url:''
        },
        {
          image: 'https://picsum.photos/id/456/1200/400',
          name: 'Başlık',
          description: 'Açıklama',
          key: 2,
          source:"Milliyet",
          url:''
        },
        {
          image: 'https://picsum.photos/id/678/1200/400',
          name: 'Başlık',
          description: 'Açıklama',
          key: 3,
          source:"Sabah",
          url:''
        },
        {
          image: 'https://picsum.photos/id/123/1200/400',
          name: 'Başlık',
          description: 'Açıklamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          key: 1,
          source:"Cumhuriyet",
          url:''
        },
        {
          image: 'https://picsum.photos/id/456/1200/400',
          name: 'Başlık',
          description: 'Açıklama',
          key: 2,
          source:"Milliyet",
          url:''
        },
        {
          image: 'https://picsum.photos/id/678/1200/400',
          name: 'Başlık',
          description: 'Açıklama',
          key: 3,
          source:"Sabah",
          url:''
        },
      ];
        return(
            <div>
                <h1>New List</h1>
                <Row>
    {items.map((news)=>(<Col className="col-4 mt-4"><Card className="w-100"
  style={{
    width: '18rem'
  }}
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