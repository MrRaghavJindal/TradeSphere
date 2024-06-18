import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";


import { signInWithGoogle} from './firebase';
const Login = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem("users");
        if(auth)
        {
            navigate('/');
        }
    })
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
  
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const result = await axios.post('https://e-dashboard-theta.vercel.app/login', formData);
        const resultData = result.data
        delete resultData.password;
        console.log(resultData);
        if(resultData.username)
          {
            localStorage.setItem("users",JSON.stringify(resultData));
            navigate('/');
          }
          else{
            alert("PLEASE ENTER CORRECT DETAILS");
          }
      } catch (error) {
        console.error(error.response.data);
      }
    };

    const handleSignIn = async () => {
      try {
        const response = await signInWithGoogle();
        // console.log(response.user.email,response.user.displayName);
        const result = await axios.post('https://e-dashboard-theta.vercel.app/check_signup_email', {email:response.user.email});
        const resultData = result.data
          if(resultData.email)
          {
            delete resultData.password;
            // console.log(resultData);
            localStorage.setItem("users",JSON.stringify(resultData));
            navigate('/');
          }
          else{
            try {
              const result = await axios.post('https://e-dashboard-theta.vercel.app/Register', {
                username: `${response.user.displayName}`,
                email: `${response.user.email}`,
                password: '1234'
              });
              const resultdata = result.data;
              // console.log(resultdata);
              localStorage.setItem("users",JSON.stringify(resultdata));
              navigate('/')
            } catch (error) {
              console.error(error.response.data);
            }
          }
      } catch (error) {
        console.error(error);
      }
    };
    return(
<>

      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoGoogle
              size={20}
              className="flex justify-center items-center w-full"
              onClick={handleSignIn}
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>



        {/* <---Form opened---> */ }
        <form onSubmit={onSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email" id='email' name="email" value={FormData.email} onChange={onChange} placeholder="Email"  required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="password" id='password' name="password" value={formData.password} onChange={onChange} placeholder="Password"  required
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          {/* <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label> */}
          <Link
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </Link>
        </div>
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
          </form>




        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <Link to='/Signup'
            className="text-red-600 hover:underline hover:underline-offset-4"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
    </>
    )
}

export default Login;
