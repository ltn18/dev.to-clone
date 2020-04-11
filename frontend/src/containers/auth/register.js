import React, { useState, useEffect } from 'react'
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import axios from '../../config/axios';

import { useAsync } from '../../hooks/useAsync';

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

// const Register = (props) => {
//   const { onMoveToLogin } = props;

//   const [registerApiData, fetchRegister] = useAsync((username, password) => {
//     axios.post("/auth/register",
//       {
//         username: username,
//         password: password
//       }
//     )
//   });
const Register = ({ onMoveToLogin }) => {
  const [registerApiData, fetchRegister] = useAsync((username, password) =>
    axios.post("/auth/register", {
      username: username,
      password: password
    })
  );

  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [failureModalVisible, setFailureModalVisible] = useState(false);

  const formik = useFormik({
    validationSchema: ValidateSchema,
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: values => {
      fetchRegister(values.username, values.password);
    }
  });

  useEffect(() => {
    if (registerApiData.result) {
      setSuccessModalVisible(true);
    }
  }, [registerApiData.result])

  useEffect(() => {
    if (registerApiData.error) {
      setFailureModalVisible(true);
    }
  }, [registerApiData.error])

  return (
    <div className="w-50">
      <Modal show={successModalVisible} centered>
        <Modal.Body className="alert-success text-center">
          <Alert.Heading>Welcome to Dev Story</Alert.Heading>
          <p className="text-center">You have successfully registered an account!</p>
          <Button variant="success" size="sm" onClick={() => setSuccessModalVisible(false)}>Confirm</Button>
        </Modal.Body>
      </Modal>

      <Modal show={failureModalVisible} centered>
        <Modal.Body className="alert-danger text-center">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          {registerApiData.error && <p className="text-center">{registerApiData.error.message}</p>}
          <Button variant="danger" size="sm" onClick={() => setFailureModalVisible(false)}>Confirm</Button>
        </Modal.Body>
      </Modal>

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
          <Button
            variant="info"
            block
            className="code text-center"
            type="submit"
            disabled={registerApiData.loading}
          >
            Register
          </Button>

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
