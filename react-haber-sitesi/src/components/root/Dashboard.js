import Categories from "../Categories/Categories";
import Slider from "../News/Slider";
import NewList from "../News/NewsList";
import { Component } from "react";
import {Col, Row, Container} from "reactstrap";
import Nav from "../Header/Nav";
import Logo from "../Header/Logo";
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Container>
                <Row>
        <Col xs="3">
          <Logo/>
        </Col>

        <Col xs="9" className='m-auto'>
          <Nav/>
        </Col>

      </Row>
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