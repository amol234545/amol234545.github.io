/**
 * @title Hello
 */
import '../assets/style.scss';
import React from "react";
import {useState} from "react";
import { Button,Card,Container } from 'react-bootstrap';

export default function index() {
   const [count,setCount] = useState(0)
   return (
     <>
     <html>
      <body>
      <Container fluid>
         <Card style={{ width: '18rem' }} bg="dark" text="white">
           <Card.Body>
           <Card.Title>
             Button Counter
           </Card.Title>
           <Card.Text>
             Count:{count}
           </Card.Text>
           <Button variant="light" onClick={() => {setCount(count + 1)}}>Click</Button>
           </Card.Body>
         </Card>
      </Container>
        </body>
     </html>
     </>
   )
}
