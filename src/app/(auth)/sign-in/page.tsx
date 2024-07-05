"use client";
import React, { createContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../../../assets/styles/SignUpForm.scss";
import Button from "../../../components/shared/Button"
import Link from "next/link";
import Image from "next/image";
import img from "../../../assets/images/xd.jpg";
import { Card } from "@mui/material";

const MyContext = createContext(null);

// Define Yup validation schema
const SignUpSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

});

const LoginForm = () => {
  return (
    <MyContext.Provider value={{}}>
       <div className="wrapper">
        <div className="img">
          <Image src={img} alt="XD Image" width={571} height={600} />
          </div>
          <div className="formContainer">
            <div className="links">
              <Link href="/sign-in" className="link">
                <h2 >Login</h2>
              </Link>
              <Link href="/sign-up">
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
                  <Button> Login
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
