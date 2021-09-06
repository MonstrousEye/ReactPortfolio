import { Card} from 'react-bootstrap';
import { CardGroup} from 'react-bootstrap';

function Project(){
    return(
        <div class="row about-extra " id="projects">
    <h1 className="about mt-2 mb-3">My Projects</h1>
   
    <CardGroup>
   <Card>
    <Card.Img variant="top" src="farmeasy.PNG" width="80" height="300"/>
    <Card.Body>
      <Card.Title className="title">InterShip Project</Card.Title>
      <Card.Text  className="content">
        This is an Intership project related to Agriculture ,where farmers can post thier problems with photos and seek help from the public or by respective Department
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="link "><a href="https://farmersfarmeasy.herokuapp.com/">https://farmersfarmeasy.herokuapp.com/</a></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="weedo.PNG" width="80" height="300"/>
    <Card.Body>
      <Card.Title className="title">Self-Interest</Card.Title>
      <Card.Text  className="content">
        This is A simple Online Student portal where they can find all the notes ,assignments,textbooks and all other updates.Done on self-Interest. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="link "><a href="https://weeedoclever.herokuapp.com/">https://weeedoclever.herokuapp.com/</a></small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="portfolio.PNG" width="80" height="300" />
    <Card.Body>
      <Card.Title className="title">My-PortFolio</Card.Title>
      <Card.Text className="content">
        This is my own portfolio developed using HTML,CSS,JS and Django Framework.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="link "><a href="https://manjunathportfolio.herokuapp.com/">https://manjunathportfolio.herokuapp.com/</a></small>
    </Card.Footer>
  </Card>
</CardGroup>

</div>
    )
}

export default Project;