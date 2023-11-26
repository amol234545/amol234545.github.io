/**
 * @title Hello
 */
import React from "react";
import {useState} from "react";
import { Button,Card } from 'react-bootstrap';

export default function index() {
   const [count,setCount] = useState(0)
   return (
     <>
     <html>
        <head>
            <title>Hello</title>
        </head>
        <body>
            <div>
                <Card>
                  <Card.Header>
                    Hello
                  </Card.Header>
                  <Card.Body>
                  <Card.Title>
                    Button Counter
                  </Card.Title>
                  <Card.Text>
                    Count:${count}
                  </Card.Text>
                  </Card.Body>
                </Card>
                <Button variant="dark" onClick={() => {setCount(count + 1)}}>Click</Button>
            </div>
        </body>
     </html>
     </>
   )
}
