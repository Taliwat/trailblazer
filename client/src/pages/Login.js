import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import useMutation for gql
import { useMutation } from '@apollo/client';
// import LOGIN mutation (gql string)
import { LOGIN } from '../utils/mutations';
// import Auth object
import Auth from '../utils/auth';
import signup from '../assets/imgs/signup.webp'

function Login() {
  // initializes our form state
  const [formState, setFormState] = useState({ email: '', password: '' });
  // initializes our LOGIN mutation and prepares us for error catching
  const [login, { error }] = useMutation(LOGIN);

  // async form submitter
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // tries to log the user in using their email and password
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      // if successful, we know we have a token so we Auth.login with the token
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  // handles the form state changing using destructured name and value from the e.target
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // returns jsx
  // fields should have required if they are required
  return (
    <section className='w-full flex items-center justify-center font-bold' style={{ height: '90vh', backgroundImage: `url(${signup})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full rounded-md" style={{ backgroundColor: '#aaaaaa87' }}>
        <Link to="/signup" className='font-extrabold p-2  hover:text-gray-800'>← Go to Signup</Link>
        <h2>Login</h2>
        <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-center gap-5'>
          <div className='flex justify-start w-4/5 gap-1'>
            <label htmlFor="email" className='w-40 text-lg'>Email:</label>
            <input
              placeholder="email@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              required
              className='w-40 p-1 shadow-inner shadow-gray-400'
            />
          </div>
          <div className='flex justify-start w-4/5 gap-1'>
            <label htmlFor="pwd" className='w-40 text-lg'>Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
              required
              className='w-40 p-1 shadow-inner shadow-gray-400'
            />
          </div>
          <div className="mb-2 relative flex flex-col items-center justify-start h-20">
            <button type="submit" className='font-extrabold text-2xl p-2 hover:text-gray-800'>Submit</button>
            {error ? (
              <div>
                <p className="text-red-800">The provided credentials are incorrect</p>
              </div>
            ) : null}
          </div>

        </form>
      </div>
    </section>
  );
}

export default Login;