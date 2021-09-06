import { VscAccount } from "react-icons/vsc";
import {VscLocation } from 'react-icons/vsc';
import { VscMail } from 'react-icons/vsc';


import { Card} from 'react-bootstrap';
import { VscArrowUp } from 'react-icons/vsc';


function Contact(){
    return(
        <Card className=" Footer " id="contact">
  <Card.Header><h1 className="about mt-2 mb-3">Contact</h1></Card.Header>
  <Card.Body  >
    <Card.Title className="get">Get in Touch
</Card.Title>
    <Card.Title><b><u>Always Connect With-Me at Any Time...</u></b></Card.Title>
    <br></br>

    <Card.Text className="centerr">
     
      <VscAccount className="icon"></VscAccount><b className="bold"> NAME : </b>
    MANJUNATH R S
      <br></br>
      
      <VscLocation className="icon"></VscLocation><b className="bold"> ADDRESS:</b> BANGLORE,KARNATAKA
      <br></br>
      <VscMail className="icon"></VscMail><b className="bold"> MAIL:</b> manjunathrs7826@gmail.com

    </Card.Text>

    
    
  </Card.Body>
  
  
<a href="#"><VscArrowUp className="arrow" ></VscArrowUp></a>
</Card>
    )
}

export default Contact;
