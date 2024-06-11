import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios';

import { signInWithGoogle} from './firebase';

const Signup = () => {
    const navigate = useNavigate();


    useEffect(()=>
    {
        const auth = localStorage.getItem("users");
        if(auth)
        {
            navigate('/')
        }
    })
   

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
      });
    
      const onChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });
    
      const onSubmit = async (e) => {
        e.preventDefault();
        try{
          const response = await signInWithGoogle();

          
          const result = await axios.post('http://localhost:5000/check_signup_email', formData);
          const resultdata = result.data;
          console.log(resultdata);
          if(resultdata.username)
          {
            alert('Email already exists');
          }
          else{
              try {
                const result = await axios.post('http://localhost:5000/Register', formData);
                const resultdata = result.data;
                console.log(resultdata);
                localStorage.setItem("users",JSON.stringify(resultdata));
                navigate('/')
              } 
              catch(error)
              {
                console.log(error);
              }
            }
          
        }
        catch(error)
        {
          console.error(error.response.data);
        }
       
      };
return (



    <>

      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>

      <div className="md:w-1/3 max-w-sm">
        {/* <---Form opened---> */ }
        <form onSubmit={onSubmit}>

        <label htmlFor="username">Username:</label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text" id="username" name="username" value={formData.username} onChange={onChange} placeholder="Username" required
        />

        <label htmlFor="email">Email:</label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="email" id="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="password" id="password" name="password" value={formData.password} onChange={onChange} placeholder="Password"  required
        />

          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Sign Up
          </button>
          </form>
      </div>
    </section>



{/* <div className="contain">
    <h2>Signup Form</h2>
    <form onSubmit={onSubmit}>
    <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={onChange} placeholder="Username" required/>
    </div>
    <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" required/>
    </div>
    <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={onChange} placeholder="Password"  required/>
    </div>
    <button type="submit" className="btn">Signup</button>
    </form>
</div> */}
</>
    )
}

export default Signup;
