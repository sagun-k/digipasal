import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


const ImageSlide = () => {
    const images = [
        {  url:"images/colourfulshoes.jpg" },
        {  url:"images/converse.jpg" },
        { url:"images/redminote8.jpg" },
        { url:"images/revolt shoes.jpg" },
        { url: "images/T-shirt.jpg" },
        
      ];
      const width="75%";
  
      
    return (
        <div className="w-full"  >
            <div className="w-3/4 mx-auto" >
             <SimpleImageSlider
        width={width}
       
        className=" ml-20 "
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
            </div>
        </div>
    )
}

export default ImageSlide
