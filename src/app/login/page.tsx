"use client";
import React, { createContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../assets/styles/SignUpForm.scss";
import Button from "../../components/shared/Button";
import Link from "next/link";
import Image from "next/image";
import img from "../../assets/images/xd.jpg";
import axios from "axios";
const MyContext = createContext(null);

// Define Yup validation schema
const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const onSubmit = async (values: any, { setSubmitting }) => {
    try {
      const response = await axios.post('/api/auth/login', values, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
      console.log('Login successful:', response.data);
      // Handle successful login (e.g., redirect)
  } catch (error) {
      console.error('Login error:', error);
  } finally {
      setSubmitting(false);
  }
};

  return (
    <MyContext.Provider value={{}}>
      <div className="wrapper">
        <div className="img">
          <Image src={img} alt="XD Image" width={571} height={600} />
        </div>
        <div className="formContainer">
          <div className="links">
            <Link href="/login" className="link">
              <h2>Login</h2>
            </Link>
            <Link href="/signup">
              <h2>Register</h2>
            </Link>
          </div>
          <div className="form">
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div className="inputWrapper">
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Name"
                      className="inputBox"
                    />
                    <ErrorMessage
                      name="username"
                      component="p"
                      className="text-red-500 text-xs italic"
                    />
                  </div>

                  <div className="inputWrapper">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="inputBox"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-xs italic"
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button type="submit" disabled={isSubmitting}>
                      Login
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default LoginForm;
