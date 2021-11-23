import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import {auth,firestore} from '../Config/Config'
import Cartproducts from './Cartproducts'
import {Link} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {toast} from 'react-toastify';
import'react-toastify/dist/ReactToastify.css';
toast.configure();
const Cart = ({}) => {
  function GetCurrentUser(){
    const [user, setUser]=useState(null);
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if(user){
          firestore.collection('users').doc(user.uid).get().then(snapshot=>{
              setUser(snapshot.data().name)
          })
            }
            else{
                 setUser(null)
            }
        })
    },[])
    return user;
}
const loggedUser= GetCurrentUser();
//state of products in Cart
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
// console.log(cartproducts)
//function to increase card product quantity
let Product;
const cartproductIncrease=(cartproduct)=>{
  // console.log(cartproduct);
  Product=cartproduct;
  Product.Qty = Product.Qty + 1;
  Product.TotalProductPrice= Product.Qty*Product.price;
  //update the firestore collection
  auth.onAuthStateChanged(user=>{
    if(user){
         firestore.collection("Cart" + user.uid).doc(cartproduct.ID).update(Product).then(()=>{
           console.log("increment added")
         })
    }
    else{
      console.log("User is not logged in to   increment")
    }
  })

}
const cartproductDecrease = (cartproduct)=>{

  Product=cartproduct;
  if(Product.Qty>1){
  Product.Qty = Product.Qty - 1;
  Product.TotalProductPrice= Product.Qty*Product.price;
  // console.log(cardproduct)
  auth.onAuthStateChanged(user=>{
    firestore.collection("Cart" + user.uid).doc(cartproduct.ID).update(Product).then(()=>{
      if(user){
        console.log("Decremented");
      }
      else{
        console.group("User is not logged in")
      }
    })
  })
}

}
//getting Qty from the cartproducts array

const qty=cartproducts.map(cartproduct=>{
  return cartproduct.Qty
})
//getting price from the cartproducts array from database
const toalPrice = cartproducts.map(cartproduct=>{
  return cartproduct.TotalProductPrice
})
//calculating the total Qty
const reducerOfQty =(accumulator,currentValue)=>accumulator+currentValue;
const totalQty = qty.reduce(reducerOfQty,0)
// console.log(totalQty)

const reducerOfPrice=(accumulator,currentValue)=>accumulator+currentValue;
const totalPriceToPay = toalPrice.reduce(reducerOfPrice,0)
// console.log(totalPriceToPay)

  //state of total products
  const [totalProducts, setTotalProducts]=useState(0);
  //getting user's cart products
  useEffect(()=>{
      auth.onAuthStateChanged(user=>{
          if(user){
              firestore.collection("Cart" + user.uid).onSnapshot(snapshot=>{
                  const qty= snapshot.docs.length;
                  setTotalProducts(qty);
              })
          }
      })
  },[])
  //charging payment
  const navigate= useNavigate();
  const handleToken= async (token) => {
    // console.log(token);
    const cart= {name:'Add Products',totalPriceToPay}
    const response =  await axios.post("http://localhost:8080/checkout",{
      token,
      cart
    })
    console.log(response)
    let {status} = response.data();
    if(status === "success"){
      navigate("/"); 
      toast.success("Your order has been placed",{
        position: "top-right",
        autoClose:"4000",
        hideProgressBar:false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress:undefined,
      })
    }
    else{
      alert("Something went wrong in your payment")
    }
  }
    return (
      <>
      <Navbar user={loggedUser} totalProducts={totalQty} />
     { cartproducts.length <= 0 && <div className="w-full">
         <div className="w-2/4 mx-auto text-center " >
          <div className=" mt-44 " >

            <div>
              <h1>No card to show</h1>
            </div>
            <div className=" w-full ">
              <div className=" md:w-1/4 hover:bg-purple-900 w-11/12 text-white mx-auto bg-purple-600">
              <Link to="/" >
              <button className="w-full"  > Want to shop?</button>
              </Link>
              </div>
            </div>
          </div>

         </div>
         </div>
       }
      {cartproducts.length >= 1 && <>
         <div className="mt-40" >
           <div className="text-center mb-10" >
             <h1 className="text-3xl text-purple-500">Your Cart Products</h1>
           </div>
          
           <div className="text-black text-center w-full " >
                   <div className="flex flex-wrap w-3/4 md:w-11/12  mx-auto " >
                   <Cartproducts cartproducts={cartproducts} cartproductIncrease={cartproductIncrease} cartproductDecrease={cartproductDecrease} />
                   </div>
               </div>


               <div className="w-2/4 mx-auto mb-10" >
                 <div className="w-2/4 mx-auto border-2  border-gray-500 h-auto text-center " >
                   <div className="text-center">
                     <h1>Cart Summary</h1>
                   </div>
                   <hr />
                   <div>
                     <div>
                       <h1>Total Products: <span className="mr-2">{totalQty}</span> </h1>
                     </div>
                      <div>
                      <h1>Total Price: <span className="mr-2">{totalPriceToPay}</span> </h1>
                      </div>
                   </div>
                  
                   <div className="w-2/4 mx-auto" >
                     <div className="w-full bg-blue-500 mb-3 cursor-pointer" >
                     <StripeCheckout
                       stripeKey="pk_test_51Jwgr3SFDRDFYtIR5mKkFFTl6BZ2HcWySpmPmRBLyBpS2PtVxfHkCtwhtgCXQf7p8q78v42vaOGSiEfQVFdIQACv00zUNbbkCa"
                       token={handleToken}
                       billingAddress
                       shippingAddress
                       name="All Products"
                       amount={totalPriceToPay*100}
                     className="text-white" >Proceed to pay</StripeCheckout>
                     </div>
                   </div>

                 </div>

               </div>
              
         </div>
      </>}
      </>
    )
}

export default Cart
