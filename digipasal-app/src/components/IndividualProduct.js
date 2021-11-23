import React from 'react'


const IndividualProduct = ({individualproduct,addToCart}) => {
    // console.log(individualproduct.title)
    // const imgStyle={
    //     width:"100%",
    //     height:"8rem"
    // }
    // const boxHeight = {
    //     width:"10rem",
    //     height:"20rem"
    // }
    const handleAddtocart=()=>{
      addToCart(individualproduct)
    }
    return (
        
        <div  className=" w-40 h-auto lg:w-80  rounded overflow-hidden hover:-translate-y-1.5  transition transform delay-150  hover:shadow-2xl">
            <div className="w-8/12 mx-auto" >
        <img className="w-full md:h-48 h-36  " src={individualproduct.url} alt="Picture of product"/>
        </div>
        <div className="grid grid-rows-4 mb-2" >
        <div className="row-start-1 row-end-2">
          <h1 className="text-blue-800 text-xl font-semibold " >{individualproduct.title}</h1>
        </div>
        <div className="row-start-2 row-end-3">
          <p className="text-purple-500 text-base">
           {individualproduct.description.substring(0,25)    
            }
          </p>
        </div>
        <div className="row-start-3 row-end-4">
        <h1>Rs.{individualproduct.price}</h1>
        </div>
        <div className="w-full mt-3 row-start-4 row-end-5"> 
            <div className="w-2/4 mx-auto hover:bg-red-800 cursor-pointer text-white rounded-md shadow-md bg-purple-700 h-6" >
       <button className="w-full"  onClick={handleAddtocart} >Add to cart</button>
               </div> 
        </div>
        </div>
      </div>
        
    )
}

export default IndividualProduct
