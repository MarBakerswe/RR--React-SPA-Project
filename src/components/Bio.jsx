import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>My Bio</Card.Title>
          <Card.Text>
            H
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>

    
    </div>
  );
}

export default CardExample;