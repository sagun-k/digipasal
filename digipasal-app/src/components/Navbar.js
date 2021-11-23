import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'react-icons-kit'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
import {auth,firestore} from '../Config/Config'
import {useNavigate} from 'react-router-dom'
const Navbar = ({user,totalProducts}) => {
  const navigate= useNavigate();
  const handleLogout=()=>{
 auth.signOut().then(()=>{
   navigate('/')
 })
  }
  const[cartproducts,setCardproducts]= useState([])
   useEffect(()=>{
     auth.onAuthStateChanged(user=>{
       if(user){
         firestore.collection("Cart" + user.uid).onSnapshot(snapshot=>{
           const newCartproduct = snapshot.docs.map((doc)=>({
             ID:doc.id,
             ...doc.data()
           }))
           setCardproducts(newCartproduct);
         })
       }
       else{
            console.log("User is not signed in")
       }
     })
   },[])
   console.log(cartproducts);
   const qty= cartproducts.map(cardproduct=>{
       return cardproduct.Qty
   })
   const reducerOfQty =(accumulator,currentValue)=>accumulator+currentValue;
const totalQty = qty.reduce(reducerOfQty,0)
//handle burger menu bar
const [displaylogins,setDisplaylogins]=useState("hidden");
const [displaySearch,setDisplaySearch]=useState("hidden");
const handleDisplaylogins=()=>{
   if(displaylogins==="hidden"){
     setTimeout(()=>{
      setDisplaylogins("grid");
      setDisplaySearch("grid")
     },500)
     
   }
   else{
     setDisplaylogins("hidden");
     setDisplaySearch("hidden")
   }
}
    return (
      <>
      <div className="fixed top-0 z-50 w-full mt-0" >
      {/* this is upper navigation bar */}
      <div className="w-full h-auto  shadow-2xl bg-gray-300 text-center text-gray-800 grid grid-cols-3 md:grid-cols-12 " >
        <div className="hidden mt-1 justify-around md:flex md:col-start-1 md:col-end-3">
          <div className="" >
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
            </a>
           </div>
          <div>
                  <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
                  </a>
          </div>
          <div className="text-xs">
          <h1>Call us: <a href="tel:+44-785-7895">+44-785-7895</a></h1>
          </div>
               
        </div>
         <div className=" w-3/4 mx-auto col-start-1 col-end-2 md:col-start-9 md:col-end-10" >
          <Link to="/" className="underline text-xs " >Shop Now </Link>
         
         </div>
         <div className=" w-full mx-auto col-start-2 col-end-3 md:col-start-10 md:col-end-11" >
         
          <Link to="/addproducts" className="underline text-xs  " >Sell Your Products</Link>
         </div>
         <div className=" w-full mx-auto col-start-3 col-end-4 md:col-start-11 md:col-end-12" >
         
          <Link to="/addproducts" className="underline text-xs  " >Customer Care </Link>
         </div>
      </div>
      <div>
        {/* lower navigation */}
        <nav className=" lg:grid-rows-1 lg:grid-cols-12 grid grid-rows-3 grid-cols-4 items-center justify-between shadow-xl flex-wrap bg-white p-6 w-full ">
  <div className=" lg:col-start-1 lg:col-end-4 col-start-1 col-end-4 row-start-1 row-end-2    flex items-center flex-shrink-0 w-full text-white mr-6">
   
    <Link to="/" className="font-semibold text-xl tracking-tight"><span className="text-5xl text-blue-800" >Digi</span><span className="text-3xl text-purple-500" >Pasal</span><span className="text-2xl text-blue-800" >.Com</span></Link>
  </div>
  <div className="block lg:hidden col-start-5 col-end-5   " onClick={handleDisplaylogins} >
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  {/* search bar */}
   <div className={`w-full lg:grid  lg:col-start-4 lg:row-span-1 lg:col-end-10 row-start-2 row-end-3 ${displaySearch} shadow-md `} >
     <div className="flex w-full" >
       <div className="w-full " >
 <input type="text" placeholder="search" className="w-full h-11  border-1 border-gray-300" />
 </div>
  <button type="submit" className=" bg-purple-600">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</button>
 </div>
    </div>
  <div className="w-full block lg:row-span-1 lg:col-start-10 lg:col-end-13 col-start-1 col-end-3 row-start-3 row-end-4 flex-grow lg:flex lg:items-center lg:w-auto">
    {/* <div className=" w-full text-sm lg:flex-grow">
      
    </div> */}
    <div className=" w-full " >
     
     {!user&&
     <>
 <div  className={`${displaylogins} lg:grid text-center lg:grid-rows-1 lg:grid-cols-2  w-full  grid-rows-2  text-gray-600 `}>
       <div className=" lg:row-span-1 lg:col-start-1 lg:col-end-2 row-start-1 row-end-2" >
      <Link to="signup"  >SignUp</Link>
      </div>
      <div className="row-start-2 row-end-3 lg:row-span-1 lg:col-start-2 lg:col-end-3 " >
      <Link to="login" >Login</Link>
      </div>
      </div>
  
     </>}
     {user&&<>
     <div className={`${displaylogins} lg:grid lg:grid-rows-1 lg:grid-cols-3 w-full  grid-rows-3  text-gray-600 `} >
       <div className=" w-full lg:col-start-1 justify-around flex  lg:col-end-3 lg:row-span-1 row-start-1 row-end-2  "  >
         <div>
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-video" viewBox="0 0 16 16">
  <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Zm10.798 11c-.453-1.27-1.76-3-4.798-3-3.037 0-4.345 1.73-4.798 3H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1.202Z"/>
</svg>
         </div>
         <Link to="/" >{user}</Link>
        
       </div>
       <div className=" row-start-2 row-end-3 lg:col-start-3 lg:col-end-4 lg:row-span-1 " >
       <span className="relative left-5 bottom-3 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{totalQty}
    </span>
         <Link to="/cart" >
           <Icon icon={shoppingCart} size={20} />
         </Link>
        
       </div>
       <div className="mx-1 cursor-pointer lg:col-start-4 lg:col-end-4 lg:row-span-1 row-start-3 row-end-4 flex " onClick={handleLogout} >
        <h1> Logout</h1>
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="22" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
       </div>
     </div>
     </>}
    
    </div>
  </div>
</nav>
    
        </div>
        </div>
        </>
    )
    
}

export default Navbar
