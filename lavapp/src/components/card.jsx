import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ObjPres() {
        return (<Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="Pina-colada.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Whenever you are on the beach or along the pool with your friends a piña colada is your go to option for a cool drink
          </Card.Text>
          <Button Link to="#">Look at item</Button>
        </Card.Body>
      </Card>
      );
    }
 
export default ObjPres;
