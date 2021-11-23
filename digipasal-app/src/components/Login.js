import React, { useState } from "react";
import { Link } from "react-router-dom";
import {auth,facebookProvider,firestore} from '../Config/Config'
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [successmsg, setSuccessmsg] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log({
      Email: email,
      Password: password,
    });
    auth.signInWithEmailAndPassword(email,password).then(() => {
          setSuccessmsg("Login Successfull.")
          setPassword('');
          setEmail('');
          setErrormsg('');
          setTimeout(()=>{
              setSuccessmsg("");
              navigate('/')
          },2000)
    }).catch(error=>setErrormsg(error.message))
  };
  
  // const handleLoginWithFb = async () => {
  //   try {
  //     const res = await auth.signInWithPopup(facebookProvider);
  //     const user = res.user;
  //     const query = await firestore
  //       .collection("users")
  //       .where("uid", "==", user.uid)
  //       .get();
  //     if (query.docs.length === 0) {
  //       await firestore.collection("users").add({
          
  //         name: user.displayName,
  //         email: user.email,
  //         password:"We couldnt access this",
  //         authProvider: "google",
        
  //       });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };
  return (
    <div>
      
      <div className="grid min-h-screen bg-gray-500 place-items-center">
        <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 className="text-xl font-semibold">
          Login before Shopping, 
          <Link to="/" className="underline text-md  text-blue-500" >Explore before login?</Link>
           
          </h1>
          {successmsg&&<>
          <div className="text-xs text-red-500" >{successmsg}</div>
          </>}
          <form className="mt-6" onSubmit={handleLogin}>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-600 uppercase"
            >
              E-mail
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              name="email"
              placeholder="yourname@gmail.com"
              autoComplete="email"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              htmlFor="password"
              className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              name="password"
              placeholder="********"
              autoComplete="current-password"
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-400 shadow-lg focus:outline-none hover:bg-green-600 hover:shadow-none"
            >
              Log In
            </button>
              <button
             
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-blue-400 shadow-lg focus:outline-none hover:bg-blue-600 hover:shadow-none"
            >
              Log In with Facebook
            </button>
      
            <p className=" justify-between inline-block mt-4 text-xs text-blue-500 cursor-pointer hover:text-blue-900">
              Forgot password?
            </p>
            <div className="mt-2 text-center">
              <h1 className="text-gray-500">
                Don't have got account?
                <Link to="/signup" className="underline text-blue-500">
                  Sign Up
                </Link>
              </h1>
            </div>
            
          </form>
          {errormsg&&<>
          <div className="text-xs text-red-500" >{errormsg}
            </div></>}
        </div>
      </div>
    </div>
  );
};

export default Login;
