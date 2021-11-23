import React from 'react'
import IndividualCartProduct from './IndividualCartProduct'
const Cartproducts = ({cartproducts,cartproductIncrease,cartproductDecrease}) => {
    return cartproducts.map((cartproduct)=>(
        
        <div className="mx-2 my-4" key={cartproduct.ID} >
        <IndividualCartProduct key={cartproduct.ID} cartproduct={cartproduct} cartproductIncrease={cartproductIncrease} cartproductDecrease={cartproductDecrease} />
        </div>
        
    ))

    
    
    
}

export default Cartproducts
