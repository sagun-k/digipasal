import React from 'react'
import {Icon} from "react-icons-kit"
import {plus} from 'react-icons-kit/feather/plus'
import {minus} from 'react-icons-kit/feather/minus'
import {auth,firestore} from '../Config/Config'

const IndividualCartProduct = ({cartproduct,cartproductIncrease,cartproductDecrease}) => {
    const imgStyle={
        width:"100%",
        height:"12rem"
    }
    const boxHeight = {
        width:"20rem",
      
    }
    const  handleCardproductIncrase=()=>{
        cartproductIncrease(cartproduct);
    }
    const handleCardproductDecrease=()=>{
        cartproductDecrease(cartproduct);
    }
    const handleRemoveCart=()=>{
       auth.onAuthStateChanged(user=>{
           if(user){
               firestore.collection("Cart" + user.uid).doc(cartproduct.ID).delete().then(()=>{
                   console.log("Successfully delted")
               })
           }
       })
    }
    return (
        <div style={boxHeight} className=" h-auto rounded overflow-hidden hover:-translate-y-1.5  transition transform delay-300   hover:shadow-2xl">
        <div className="w-8/12 mx-auto" >
    <img className="w-full h-6" style={imgStyle} src={cartproduct.url} alt="Picture of product"/>
    </div>
    <div className="">
      <h1 className="text-blue-800 text-xl font-semibold " >{cartproduct.title}</h1>
    </div>
    <div className="">
      <p className="text-purple-500 text-base">
       {cartproduct.description.substring(0,25)    
        }
      </p>
    </div>
    <div className="">
    <h1>Rs.{cartproduct.price}</h1>
    </div>
    <div>
            <h1>Quantity</h1>
        </div>
    <div className="flex justify-around w-2/4 mx-auto">
           <div className="cursor-pointer" onClick={handleCardproductDecrease}  >
            <Icon icon={minus} size={20}/>
        </div>
        <div>{cartproduct.Qty}</div>
        <div onClick={handleCardproductIncrase} className="cursor-pointer" >
            <Icon icon={plus} size={20}/>
        </div>
    </div>
    <div className="text-center" >
        <h1><span className="font-semibold" >Total</span>:<span className="text-red-800" >{cartproduct.TotalProductPrice}</span></h1>
    </div>
    <div className="" className="w-full mt-3">
        
        <div className="w-2/4 flex mx-auto mb-10 hover:bg-red-800 cursor-pointer text-white rounded-md shadow-md bg-red-700 h-6" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash mt-1" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
   <button className="w-full" onClick={handleRemoveCart}  >Remove From Cart</button>
           </div> 
    </div>
    
  </div>
    )
}

export default IndividualCartProduct
