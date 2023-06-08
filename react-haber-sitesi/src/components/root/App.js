
import Login from "../Login/Login";
import NewsDetail from "../News/NewsDetail";
import Dashboard from "./Dashboard";
import {Route,Routes} from "react-router-dom"
import {Container, Row, Col} from 'reactstrap';
import Nav from "../Header/Nav";
import Logo from "../Header/Logo";

function App() {
  return (
    <>
     <Dashboard/>
    <Container className='m-0'>
      <Row>
        <Col xs="3">
          <Logo/>
        </Col>

        <Col xs="9" className='m-auto'>
          <Nav/>
        </Col>

      </Row>


    </Container>
     <Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Dashboard />} />
<Route path="/detail/:key" element={<NewsDetail/>}/>
<Route path="*" element={<h1>Not Found</h1>} />
</Routes>
    </>
  );
}

export default App;
