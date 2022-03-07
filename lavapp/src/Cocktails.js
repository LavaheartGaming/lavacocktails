import NavbarMenu from './components/NavbarMenu';
import ObjPres from './components/card';
import {Container, Row, Col} from 'react-bootstrap';

function Cocktails() {
  return (
    <div className="Cocktails">
      <NavbarMenu/>
      <Container>
        <Row>
          <Col><ObjPres/></Col>
          <Col><ObjPres/></Col>
          <Col><ObjPres/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cocktails;