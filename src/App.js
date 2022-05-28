import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import * as yup from 'yup';
import formSchema from './validation/formSchema';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Dates from "./components/Dates";
import UserForm from "./components/UserForm";

// User Data (Registration)
const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  tos: false
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  tos: false
}
const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data.data);
      })
      .catch(err => console.error(err));
  };

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  };
  
  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    }
    postNewUser(newUser);
  };

  const validate = (name, value) => {
    yup.reach(formSchema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value});
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid));
  }, [formValues]);
  
  return (
    <div className="App">
      <div className="content">
        <header className="appHeader">
          <Navbar />
        </header>
        <Routes>
          <Route path="/register" element={<UserForm formValues={formValues} formErrors={formErrors} formSubmit={formSubmit} inputChange={inputChange} disabled={disabled} />} />
          <Route path="/about" element={<About />} />
          <Route path="/dates" element={<Dates />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
