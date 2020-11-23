import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "../components/signup.css";
import logo from "../img/logo";

function Signup() {
  return (
    <section>
      <div id="col" className="image">
        <img class="logo" src={logo} alt="logo" />
      </div>
      <div id="col" class="form">
        <Form>
          <InputGroup className="textfill">
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Subscribe to our newsletters and updates"
            />
            <br />
            on our new products
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Signup;
