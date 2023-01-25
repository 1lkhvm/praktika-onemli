import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios';
 
 const SignupForm = () => {
   return (
     <Formik
       initialValues={{ name: '', imgURL: '', title: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         imgURL: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
        
       })}
       onSubmit={(values) => {
            axios.post("http://localhost:3129", values)
       }}
     >
       <Form>
         <label htmlFor="name"> Name</label>
         <Field name="name" type="text" />
       
 
         <label htmlFor="imgURL">image</label>
         <Field name="imgURL" type="text" />
        
         <label htmlFor="title">title </label>
         <Field name="title" type="text" />
         
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
   );
 };

 export default SignupForm