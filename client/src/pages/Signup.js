import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import useMutation for gql
import { useMutation } from '@apollo/client';
// import our Auth object
import Auth from '../utils/auth';
// import ADD_USER mutation (gql string)
import { ADD_USER } from '../utils/mutations';
import { states } from '../assets/states';
import signup from '../assets/imgs/signup2.webp'

function Signup() {
  // track the state of the form fields (email and password)
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '', username: '', state: 'MI' });
  // initialize addUser from useMutation(ADD_USER)
  const [addUser] = useMutation(ADD_USER);

  // async function that uses our ADD_USER mutation and passes in the email, password, firstname, and lastname as variables
  // should probably have had error handling
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!formState.email || !formState.password || !formState.firstName || !formState.lastName || !formState.state) return alert("Signup incomplete")
    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
        username: formState.username,
        state: formState.state
      },
    });
    // takes the token, signs it, and logs the user in
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  // handles formState updating based on the targets name and value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // jsx form return
  // fields should probably have "required" on them
  return (
    <section className='w-full flex items-center justify-center font-bold' style={{ height: '90vh', backgroundImage: `url(${signup})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex flex-col justify-center items-center md:w-1/2 w-full rounded-md bg-gray-200 bg-opacity-80">
        <Link to="/login" className='font-extrabold p-2 hover:text-gray-800'>← Go to Login</Link>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h2>Signup</h2>
          <form onSubmit={handleFormSubmit} className='flex flex-col justify-center items-center gap-5'>
            <div className='flex justify-start w-4/5'>
              <label htmlFor="firstName" className='w-44 text-lg'>First Name:</label>
              <input
                placeholder="First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
                required
                className='w-40 p-1 shadow-inner shadow-gray-400'
              />
            </div>
            <div className='flex justify-start w-4/5'>
              <label htmlFor="lastName" className='w-36 text-lg'>Last Name:</label>
              <input
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
                required
                className='w-40 p-1 shadow-inner shadow-gray-400'
              />
            </div>
            <div className='flex justify-start w-4/5'>
              <label htmlFor="email" className='w-36 text-lg'>Email:</label>
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
            <div className='flex justify-start w-4/5'>
              <label htmlFor="username" className='w-36 text-lg'>Username:</label>
              <input
                placeholder="username"
                name="username"
                type="username"
                id="username"
                onChange={handleChange}
                required
                className='w-40 p-1 shadow-inner shadow-gray-400'
              />
            </div>
            <div className='flex justify-start w-4/5'>
              <label htmlFor="pwd" className='w-36 text-lg'>Password:</label>
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
            <div className='flex justify-start w-4/5'>
              <label htmlFor="state" className='w-36 text-lg'>State:</label>
              <select onChange={handleChange} name="state" defaultValue={'MI'} className='w-4/5 p-1 shadow-inner shadow-gray-400'>
                {states.map((state) => (
                  <option value={state.abbreviation} key={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <button type="submit" className='font-extrabold text-2xl p-2 hover:text-gray-800'>Submit</button>
            </div>
          </form>
        </div>
      </div >
    </section >
  );
}

export default Signup;