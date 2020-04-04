import React from 'react'
import {Form, Button} from 'react-bootstrap';

const Login = (props) => {
  const {onMoveToRegister} = props;
  return (
    <div className="w-50">
      <h4 className="code text-center">Login</h4>
      <Form>
        <Form.Group>
          <Form.Label className="code text-center">Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group>
          <Form.Label className="code text-center">Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        
        <Form.Group>
          <Form.Check type="checkbox" className="code" label="Remember me"/>
        </Form.Group>

        <Form.Group>
          <Button variant="info" block className="code text-center">Login</Button>
          <Form.Text className="code text-center">
            Don't have an account?&nbsp;
            <a href="#" onClick={onMoveToRegister}>Register</a>
            &nbsp;Now
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Login
