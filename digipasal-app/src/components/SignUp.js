import React,{useState} from "react"
import {Link } from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import {auth,firestore} from '../Config/Config'




const SignUp = () => {
  const navigate= useNavigate();
    const [fullname, setFullname]=useState("");
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const[confirmpassword, setConfirmPassword]=useState("")
    const [passwordCheck,setPasswordcheck]=useState("")
    const[errormsg, setErrormsg]=useState("")
    const[successmsg, setSuccessmsg]=useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
       
        if(password !== confirmpassword){
                setPasswordcheck("Passowrd didn't match")
        }
        else{
         
          auth.createUserWithEmailAndPassword(email,password).then((credentials)=>{
            console.log(credentials)
             firestore.collection('users').doc(credentials.user.uid).set(
              {
                name:fullname,
                email:email,
                password:password,
              authProvider:"local"}
             ).then(()=>{
               setSuccessmsg("Signup Successfull.You will now get redirected to Login");
               setFullname('');
               setPassword('');
               setEmail('');
               setErrormsg('');
               setTimeout(()=>{
                   setSuccessmsg("");
                   navigate('/login')
               },2000)

             }).catch(error=>setErrormsg(error.message))
          }).catch((error)=>{
               setErrormsg(error.message)
          })
        }
        
    }
   
    
   
  return (
    <div>
     
     
      <div className="bg-gray-500 min-h-screen w-full flex flex-col">
        <div className="grid grid-rows-2 w-3/4 mx-auto lg:grid-rows-1 lg:grid-cols-2 " >
          <div className="lg:row-span-1 lg:col-start-1 lg:col-end-2 row-start-1 row-end-2 w-full mt-16 bg-pink-300 text-center shadow-xl rounded-lg " >
           <div className="mt-20">
           <Link to="/" className="font-semibold  tracking-tight"><span className="text-7xl text-blue-800" >Digi</span><span className="text-4xl text-purple-500" >Pasal</span><span className="text-2xl text-blue-800" >.Com</span></Link>
           <div className="mt-2 text-sm text-purple-700">
             <span>"Shop with reasonable price."</span>
           </div>
           </div>
   <div className="mt-20">
      <Link to="/" className="underline text-purple-700" >Want to explore before Signing Up?</Link>
   </div>
          </div>
        <div className="lg:row-span-1 lg:col-start-2 lg:col-end-3 w-full row-start-2 row-end-3   mx-auto flex-1 flex flex-col items-center justify-center px-2 bg-white border-2 border-gray-500 shadow-lg rounded">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            {successmsg&&<>
            <div className="text-greeb-400 text-xs" >{successmsg}</div>
            </>}
            <form onSubmit={handleSubmit}>
            <input
            onChange={(e)=>setFullname(e.target.value)}
            value={fullname}
              type="text"
              className="block border border-grey-400 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
             onChange={(e)=>setEmail(e.target.value)}
            value={email}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
             onChange={(e)=>setPassword(e.target.value)}
            value={password}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
             onChange={(e)=>setConfirmPassword(e.target.value)}
            value={confirmpassword}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />
            <h1 className="text-xs text-red-500" >{passwordCheck}</h1>

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-600 focus:outline-none my-1"
            >
              Create Account
            </button>
            </form>
           
            {errormsg&&<>
            <div className="text-red-500 text-xs" >{errormsg}</div>
            </>}
            <div className="text-center text-sm text-grey-300 mt-4">
              By signing up, you agree to the
              <a
                className="no-underline ml-1 border-b border-grey-dark text-blue-500 hover:text-blue-800"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark hover:text-blue-800 text-blue-500 ml-1"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            <div className="text-grey-dark mt-6 text-center">
            Already have an account?
            <Link to="/login"
              className="underline border-b border-blue text-blue-500 hover:text-blue-800"
             
            >
              Log in
            </Link>
            .
          </div>
          </div>

         
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
