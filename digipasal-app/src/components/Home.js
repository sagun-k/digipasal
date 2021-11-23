import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import { auth, firestore } from "../Config/Config";
import { useNavigate } from "react-router-dom";
import Services from "./Services";
import ImageSlide from "./ImageSlide";
import Footer from "./Footer";
import {Link } from "react-router-dom";
const Home = ({}) => {
  // fetching the number of products
  const [cartproducts, setCardproducts] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        firestore.collection("Cart" + user.uid).onSnapshot((snapshot) => {
          const newCartproduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setCardproducts(newCartproduct);
        });
      } else {
        console.log("User is not signed in");
      }
    });
  }, []);
  console.log(cartproducts);
  const qty = cartproducts.map((cardproduct) => {
    return cardproduct.Qty;
  });
  const reducerOfQty = (accumulator, currentValue) =>
    accumulator + currentValue;
  const totalQty = qty.reduce(reducerOfQty, 0);
  const navigate = useNavigate();

  //getting current user uid
  function GetUserid() {
    const [uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
    return uid;
  }
  const uid = GetUserid();
  // getting current user function
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          firestore
            .collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().name);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }
  const loggedUser = GetCurrentUser();

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const product = await firestore.collection("Products").get();

    const productsArray = [];
    for (var snap of product.docs) {
      var data = snap.data();

      data.ID = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === product.docs.length) {
        setProducts(productsArray);
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    if (uid !== null) {
      product["Qty"] = 1;
      product["TotalProductPrice"] = product.Qty * product.price;
      firestore
        .collection("Cart" + uid)
        .doc(product.ID)
        .set(product)
        .then(() => {
          console.log("successfully added to Cart");
        });
    } else {
      navigate("/login");
    }
  };
  //state of total products
  const [totalProducts, setTotalProducts] = useState(0);
  //getting user's cart products
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        firestore.collection("Cart" + user.uid).onSnapshot((snapshot) => {
          const qty = snapshot.docs.length;
          setTotalProducts(qty);
        });
      }
    });
  }, []);
  //this is to for viewing all process
     let halfproducts = products.slice(0,8);
     const [productstate,setProductstate]=useState(true) ;
     
     const [displayServices,setDisplayservices]=useState("block")
     const [buttonView,setButtonview]=useState("View All");
     
     const handleViewAll = ( ) =>{
         if(productstate){
            setProductstate(false)
            setButtonview("View Less")
            setDisplayservices("hidden")
         }
         else{
            setProductstate(true)
            setButtonview("View All")
            setDisplayservices("block")
         }
            
     
     }
 
  return (
    <div className="w-full ">
      <div className=" mb-14 ">
        <Navbar user={loggedUser} totalProducts={totalQty} />
      </div>
      <div >
      <ImageSlide  />
      </div>

      <div className="bg-gray-200">
        {products.length >= 1 && (
          <>
            <div className="text-black text-center w-full ">
              <div className="mt-16 inline-block mb-9 ">
                <h1 className="  text-4xl text-purple-500 font-semibold">
                  Products On Sale{" "}
                </h1>
              </div>
              <div className="flex flex-wrap w-full md:w-11/12  md:mx-auto ">
                <Product products={productstate?halfproducts:products} addToCart={addToCart} />
              </div>
            <div >
              <button class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded mb-4 mt-4"
              onClick={handleViewAll}
              >
              {buttonView}
              </button>
              </div>
            </div>
          </>
        )}
        {products.length < 1 && (
          <div className="text-black w-2/4  mx-auto mt-14  ">
            <div className="w-2/4 mx-auto">
              <div className="w-2/4 mx-auto">
                <img src="./images/Spinner-3.gif" alt="Please wait" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`${displayServices} bg-white`}>
        <Services />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default Home;
