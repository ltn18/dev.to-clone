import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import axios from '../../config/axios';

import useAsync from '../../hooks/useAsync';

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required")
});

const Login = ({ onMoveToRegister }) => {

  // tạo structure cho hàm fetchLogin, chuẩn bị đưa vào formik
  const [loginApiData, fetchLogin] = useAsync((username, password) => {
    axios.post("/auth/login", {
      username: username,
      password: password
    })
  });

  const formik = useFormik({
    validationSchema: ValidationSchema,
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: values => {
      // truyền biến values vào formik đã có structure tạo bên trên
      fetchLogin(values.username, values.password);
    }
  });

  return (
    <div className="w-50">
      <h4 className="code text-center">Login</h4>
      <Form>
        <Form.Group>
          <Form.Label className="code text-center">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.username} // cast về kiểu boolean
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className="code text-center">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Check type="checkbox" className="code" label="Remember me" />
        </Form.Group>

        <Form.Group>
          <Button
            variant="info"
            block
            className="code text-center"
            disabled={loginApiData.loading}
          >
            Login
          </Button>

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
