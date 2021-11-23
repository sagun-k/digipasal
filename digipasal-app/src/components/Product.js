import React from 'react'
import IndividualProduct from './IndividualProduct'

const Product = ({products,addToCart}) => {
    // console.log(products);
    const halfproducts = products.slice(0,8);
    return <div className="grid grid-cols-2 md:grid-cols-4 gap-1"> {products.map((individualproduct)=> (
       <div className=" my-3  " key={individualproduct.ID} >
        <IndividualProduct addToCart={addToCart} individualproduct={individualproduct} />
        </div>
    ))}
    </div>
 
    
}

export default Product 
