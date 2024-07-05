"use client";
import React, { createContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../assets/styles/SignUpForm.scss";
import Button from "../../../components/shared/Button";
import Image from "next/image";
import img from "../../../assets/images/xd.jpg";
import Link from "next/link";
import "../../../assets/styles/globals.scss";
const MyContext = createContext(null);


// Define Yup validation schema
const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUpForm = () => {
  return (
    <MyContext.Provider value={{}}>
      <div className="wrapper">
        <div className="img image-container">
          <Image src={img} alt="XD Image" width={571} height={600} />
          </div>
          <div className="formContainer">
            <div className="links">
              <Link href="/sign-in">
              <h2>Login</h2>
              </Link>
              <Link href="/sign-up" className="link">
                <h2>Register</h2>
              </Link>
            </div>
            <div className="form-container">
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignUpSchema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
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
                    {/* <ErrorMessage
                      name="username"
                      component="p"
                      className="text-red-500 text-xs italic"
                    /> */}
                  </div>
                  <div className="inputWrapper">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Mail"
                      className="inputBox"
                    />
                    {/* <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-xs italic"
                    /> */}
                  </div>
                  <div className="inputWrapper">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="inputBox"
                    />
                    {/* <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-xs italic"
                    /> */}
                  </div>
                  <div className="inputWrapper">
                    <Field
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="inputBox"
                    />
                    {/* <ErrorMessage
                      name="confirmPassword"
                      component="p"
                      className="text-red-500 text-xs italic"
                    /> */}
                  </div>
                  <div className="flex justify-center">
                    <Button> Sign Up</Button>
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

export default SignUpForm;
