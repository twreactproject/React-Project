<<<<<<< Updated upstream
import Dashboard from "./Dashboard";
function App() {
  return (
    <>
     <Dashboard/>
=======
import Nav from '../Header/Nav'
import Logo from '../Header/Logo';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <>
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
>>>>>>> Stashed changes
    </>
  );
}

export default App;
