import React,{useState,useEffect} from 'react'
import {auth,firestore,storage} from "../Config/Config"
import Navbar from "./Navbar"
const AddProducts = () => {
    //mapping the cardproducts
   
  
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
    const [image,setImage]=useState(null);
    const [successmsg, setSuccessmsg]=useState('');
    const [uploaderror, setUploaderror]=useState('');
    const [imageError,setImageError]=useState('');
    const fileType=['image/jpg','image/jpeg','image/png','image/PNG']
    const handleProductImage=(e)=>{
        let selectedFile=e.target.files[0];
        if(selectedFile&&fileType.includes(selectedFile.type)){
            setImage(selectedFile);
            setImageError('')

        }
        else{
            setImage(null);
            setImageError("Please select a valid image file(jpg or png)");
        }
         
    }
    const handleAddproducts =(e)=>{
        e.preventDefault();
        
      const uploadTask =  storage.ref(`product-images/${image.name}`).put(image);
      uploadTask.on('state_changed',snapshot=>{
          const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100
          console.log(progress);
      },error=>setUploaderror(error.message),()=>{
          storage.ref('product-images').child(image.name).getDownloadURL().then(url=>{
            firestore.collection("Products").add({
                title,
                description,
                price:Number(price),
                url
          }).then(()=>{
            setSuccessmsg("Product added successfully");
            setTitle('')
            setDescription('')
            setPrice('')
            document.getElementById('file').value=""
            setTimeout(()=>{
               
                setSuccessmsg("")
     
            },1500)
        
          
          }).catch(error=>setUploaderror(error.message))
          })
      
        })

    }
   // function to get use
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

    return (
       
      <>
      <Navbar user={loggedUser} />
      <div className="w-full h-screen mt-16 " >
    
          <div className="w-2/4 mx-auto border-2 border-gray-100  bg-white h-auto mt-40 shadow-2xl " >
              <div className="w-2/4 mx-auto text-center mt-4" >
               <h1 className="text-bold text-3xl text-gray-400" >Add Products</h1>
              </div>
              {successmsg&&<>
              <div className="text-bold text-green-600 text-xs">{successmsg}</div>
              </>}
              <form action="" className="w-3/4 mx-auto mt-10 " onSubmit={handleAddproducts} >
                  <div className="mt-10" >
                      <label className="text-gray-400" >Product Title</label>
                      <div>
                      <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className="border-2 w-full border-gray-300" required />
                      </div>
                  </div>
                  <div className="mt-10" >
                      <label className="text-gray-400" >Product Description</label>
                       <div>
                      <input
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)} 
                      type="text" className="border-2 w-full border-gray-300" required />
                      </div>
                  </div>
                  <div className="mt-10" >
                      <label className="text-gray-400">Product Price</label>
                      <div>
                      <input
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)} 
                      type="text" className="border-2 w-full border-gray-300" required />
                      </div>
                  </div>
                  <div className="mt-10" >
                      <label className="text-gray-400">Upload Image</label>
                      <div>
                      <input 
                      onChange={handleProductImage}
                      id="file" type="file" className="border-2 w-full border-gray-100" required />
                      </div>
                  </div>
                  {imageError && <>
                  <div>{imageError}</div>
                  </>}
                <div className="my-10  w-full mx-auto  " >
                    <div className="w-1/4 bg-green-400 text-center h-8 hover:bg-green-800  " >
                    <button type="submit" className="w-full  text-white mt-1 ">Submit</button>
                    </div>
                </div>
              </form>
              {uploaderror&&<>
              <div>{uploaderror}</div>
              </>}
          </div>
      </div>
        
      </>
    )
}

export default AddProducts
