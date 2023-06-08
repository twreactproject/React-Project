import Categories from "../Categories/Categories";
import Slider from "../News/Slider";
import NewList from "../News/NewsList";
import { Component } from "react";
import {Col, Row, Container} from "reactstrap";
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="col-3">
                        <Categories/>
                        </Col>
                        <Col className="col-9">
                    
                        <Slider/> 
                        <NewList/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
        }
}