import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./App.css";
import Data from "./MOCK_DATA.json";

function App() {
const [searchItem, setSearchItem] = useState('')
  return (
    <div className="App">
      <Form className="fc">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Search</Form.Label>
    <Form.Control type="text" placeholder="Search..." onChange={(e)=> setSearchItem(e.target.value)}/>
  </Form.Group>
  </Form>
<div>
{Data.filter((v)=> {
if(searchItem === '') {
  return v
} else if(v.first_name.toLowerCase().includes(searchItem.toLowerCase())) {
  return v
}
}).map((val,id) => {
  return (
    <div key={id} className="flex">
      
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{val.first_name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{val.last_name}</Card.Subtitle>
    <Card.Text>
    {val.email}
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
      </div>
  )
})}
</div>

    </div>
  );
}

export default App;
