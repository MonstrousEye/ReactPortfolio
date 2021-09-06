

import {Carousel} from 'react-bootstrap';
import {CarouselItem} from 'react-bootstrap';





function Carousell(){
    return(
        <div>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=" manj.jpeg"
      alt="First slide" width="1000" height="800"
    />
    <Carousel.Caption>
      <h3>Student</h3>
      <p className="para"><b>"I WILL WIN DEFINITELY, BUT NOT IMMEDIATELY.."</b></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="InShot_20210324_183122566.jpg"
      alt="Second slide"
      width="1000" height="800"/>

    <Carousel.Caption>
      <h3 >Future-Engineer</h3>
      <p className="para"><b>“Maths is my Passion. Engineering is my Profession.”</b></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="IMG_2355.JPG"
      alt="Third slide"
      width="1000" height="800"/>

    <Carousel.Caption>
      <h3>Web-Developer</h3>
      <p className="para"><b>“If you think math is hard, try web design.”</b></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>


    )

}

export default Carousell;