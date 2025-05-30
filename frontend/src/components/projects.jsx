import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


function Projects() {
  return (
    <Card style={{ width: '19rem' }}>
      <Card.Body>
        <Card.Title>SANSKRIT MANUSCRIPT TRANSLATOR </Card.Title>
        <Card.Text>
          Uses computer vision to enhance the quality of the image and uses a self made transformer 
          to translate Sanskrit text to English. (Research Based Project)
        </Card.Text>
        <Link to="https://github.com/aryansuri42/SanskritConversion">
        <Button variant="primary">Github Repository</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Projects;