import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../../config/axios'

const ValidateSchema = Yup.object().shape({
  username: Yup.string()
    .max(20, "Username must be less than 20 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be more than 8 characters")
    .max(20, "Username must be less than 20 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Confirm password not matched!")
    .required("Confirm password is required"),
});

const Register = (props) => {
  const { onMoveToLogin } = props;

  const [apiDATA, setApiDATA] = useState(
    {
      loading: false,
      result: null,
      error: null,
    }
  )

  const formik = useFormik(
    {
      validationSchema: ValidateSchema,
      initialValues: {
        username: "",
        password: "",
        confirmPassword: "",
      },

      onSubmit: values => {
        setApiDATA({
          ...apiDATA,
          loading: true,
          result: null,
          error: null,
        })

        axios
          .post("/auth/register",
            {
              username: values.username,
              password: values.password
            }
          )
          .then(res => {
            setApiDATA({
              loading: false,
              result: res.data,
              error: null,
            });
          })
          .catch(err => {
            console.log('catched');
            setApiDATA({
              loading: false,
              result: null,
              error: err,
            });
          });
      }
    }
  )

  return (
    <div className="w-50">
      {
        apiDATA.error && 
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{apiDATA.error.message}</p>
        </Alert> 
        
      }
      <h4 className="code text-center">Register</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label className="code text-center">Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            isInvalid={!!formik.errors.username}
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
            onChange={formik.handleChange}
            value={formik.values.password}
            isInvalid={!!formik.errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label className="code text-center">Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            isInvalid={!!formik.errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Button variant="info" block className="code text-center" type="submit" disabled={apiDATA.loading}>Register</Button>
          <Form.Text className="code text-center">
            Already have an account?{" "}
            <a href="#" onClick={onMoveToLogin}>Login</a>
            {" "}Now
            </Form.Text>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Register
