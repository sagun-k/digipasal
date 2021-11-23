import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <div className="w-full bg-gray-200  " >
         <div  className="mt-36 grid grid-cols-2  grid-rows-3 md:grid-rows-1 md:grid-cols-5 w-11/12 mx-auto gap-3 ">
             <div className="col-start-1 col-end-2 row-start-1 inline-block mt-4 row-end-2 md:row-span-1 md:col-start-1 md:col-end-2 md:mt-8 md:mb-4">
               <Link to="/" className="font-semibold text-xl tracking-tight"><span className="text-5xl text-blue-800" >Digi</span><span className="text-3xl text-purple-500" >Pasal</span><span className="text-2xl text-blue-800" >.Com</span></Link>
               <div className="text-sm text-gray-600 mt-4" >
                   <h1>Head office location:</h1>
                   <h1>Bode, Bhaktapur,Nepal</h1>
               </div>
               <div className="text-sm text-gray-600 " >
               <h1>Call us: <a href="tel:+44-785-7895">+44-785-7895</a></h1>
               </div>
             </div>
             <div className="col-start-2 col-end-3 row-start-1 row-end-2 md:row-span-1 md:col-start-2 md:col-end-3 md:mt-8">
                 <div className="mt-4 text-md  text-purple-600">Payment Methods</div>
           <div className="flex" >
               <svg   viewBox="0 0 48 48" width="48px" height="48px"><linearGradient id="Et0R~umK8VADpitl6wcz1a" x1="20.375" x2="28.748" y1="1365.061" y2="1394.946" gradientTransform="translate(0 -1354)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00b3ee"/><stop offset="1" stop-color="#0082d8"/></linearGradient><path fill="url(#Et0R~umK8VADpitl6wcz1a)" d="M43.125,9H4.875C3.287,9,2,10.287,2,11.875v24.25C2,37.713,3.287,39,4.875,39h38.25	C44.713,39,46,37.713,46,36.125v-24.25C46,10.287,44.713,9,43.125,9z"/><path d="M25.733,31c-1.376-0.014-2.847-0.291-3.752-0.708l-0.658-0.303l-0.178,0.83h-5.048l1.844-8.621	l-3.612,8.621H9.717l-2.59-10.013c-0.061-0.239-0.09-0.304-0.103-0.32c-0.006-0.006-0.034-0.024-0.119-0.071	c-0.574-0.312-1.607-0.652-2.698-0.89l-0.971-0.211l0.444-2.103h5.92c1.18,0,2.131,0.8,2.365,1.989l0.626,3.326l2.104-5.315h9.36	L23.674,19c1.055-1.245,2.845-2,5.037-2c1.072,0,2.073,0.183,3.151,0.576l0.818,0.299l-0.971,4.53l-1.135-0.521	c-0.82-0.378-1.555-0.457-2.026-0.457c-0.165,0-0.297,0.011-0.386,0.022c-0.065,0.008-0.123,0.019-0.173,0.031	c0.228,0.14,0.531,0.301,0.713,0.396c1.074,0.563,2.598,1.362,3.098,2.989l2.592-6.188c0.379-0.903,1.222-1.465,2.2-1.465h3.376	l2.842,13.607h-4.82l-0.363-1.733h-2.338l-0.627,1.733h-5.356l0.322-0.769C28.598,30.659,27.271,31,25.738,31H25.733z M23.366,25.935c0.704,0.33,1.367,0.641,2.543,0.641l0.104-0.001c0.312-0.005,0.594-0.077,0.738-0.147	c-0.117-0.094-0.373-0.265-0.924-0.533c-1.614-0.785-2.621-1.758-3.009-2.902l-0.522,2.444L23.366,25.935z" opacity=".05"/><path d="M25.733,30.5c-1.306-0.013-2.696-0.272-3.543-0.662l-0.363-0.167l0.759-3.549l0.569,0.266	c0.717,0.336,1.467,0.688,2.754,0.688l0.109-0.001c0.521-0.008,1.3-0.186,1.306-0.642c0.002-0.188-0.152-0.44-1.277-0.988	c-0.727-0.354-2.937-1.432-2.908-3.615c0.019-2.548,2.311-4.329,5.572-4.329c1.013,0,1.96,0.174,2.98,0.546l0.409,0.149	l-0.749,3.495l-0.567-0.261c-0.903-0.416-1.714-0.503-2.235-0.503c-0.193,0-0.348,0.013-0.451,0.026	c-0.609,0.079-0.836,0.335-0.84,0.487c-0.005,0.238,0.672,0.594,1.216,0.88c1.267,0.664,3.001,1.575,2.992,3.711	c-0.012,2.673-2.313,4.469-5.728,4.469H25.733z M38.396,30.319l-0.363-1.733h-3.095l-0.627,1.733h-4.254l4.796-11.449	c0.3-0.715,0.967-1.158,1.739-1.158h2.97l2.633,12.607H38.396z M37.327,25.206l-0.424-2.033l-0.738,2.033H37.327z M16.716,30.319	l2.697-12.607h4.024l-2.696,12.607H16.716z M10.104,30.319l-2.492-9.638c-0.124-0.486-0.184-0.552-0.468-0.706	c-0.612-0.333-1.696-0.692-2.83-0.938l-0.485-0.105l0.258-1.22h5.515c0.934,0,1.688,0.637,1.875,1.586l0.945,5.021l2.614-6.607	h4.245l-5.284,12.607H10.104z" opacity=".07"/><path fill="#fff" d="M23.638,21.836c-0.021,1.672,1.49,2.604,2.628,3.159c1.169,0.569,1.562,0.934,1.558,1.443	c-0.009,0.779-0.933,1.123-1.798,1.136c-1.509,0.023-2.386-0.407-3.083-0.733L22.4,29.384c0.7,0.322,1.995,0.604,3.339,0.616	c3.153,0,5.217-1.557,5.228-3.97c0.012-3.063-4.237-3.233-4.208-4.602c0.01-0.415,0.406-0.858,1.274-0.971	c0.43-0.057,1.616-0.1,2.96,0.519l0.528-2.46C30.798,18.252,29.868,18,28.711,18C25.743,18,23.655,19.578,23.638,21.836 M36.592,18.212c-0.576,0-1.061,0.336-1.278,0.851L30.81,29.819h3.151l0.627-1.733h3.851l0.364,1.733h2.777l-2.424-11.607H36.592 M37.033,21.348l0.909,4.359h-2.491L37.033,21.348 M19.818,18.212l-2.484,11.607h3.003l2.483-11.607H19.818 M15.375,18.212	l-3.126,7.9l-1.264-6.717c-0.148-0.75-0.734-1.183-1.385-1.183h-5.11L4.42,18.549c1.049,0.228,2.241,0.595,2.963,0.988	c0.442,0.24,0.568,0.45,0.713,1.02l2.395,9.263h3.174l4.865-11.607L15.375,18.212"/></svg>
               <img src="./images/icons8-cash-on-delivery-48.png" />
           </div>
             </div>
             <div className="col-start-1 col-end-2 row-start-2 row-end-3 mt-4 md:row-span-1 md:col-start-3 md:col-end-4 md:mt-8" >
                 <div>
                     <h1 className="text-lg text-purple-600" >Information</h1>
                     <div className="text-xs text-gray-500" >
                        <h1> <a href="#">Privacy Policy</a></h1>
                        <h1> <a href="#">Terms and Conditions</a></h1>
                     </div>

                 </div>
             </div>
             <div className="col-start-2 col-end-3 row-start-2 row-end-3 md:row-span-1 md:col-start-4 md:col-end-5 md:mt-8" >
                 <div>
                     <h1 className="text-lg text-purple-600" >Follow Us On </h1>
                     </div>
                     <div className="flex " >
                         <div>
                             <a href="#"><svg  viewBox="0 0 48 48" width="44px" height="48px"><path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"/></svg></a>
                         </div>
                         <div>
                             <a href="#"><svg  viewBox="0 0 48 48" width="44px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg></a>
                         </div>
                         <div>
                             <a href="#"><svg   viewBox="0 0 48 48" width="44px" height="48px"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"/><path fill="#FFF" d="M20 31L20 17 32 24z"/></svg></a>
                         </div>
                     </div>
             </div>
             <div className="col-start-2 col-end-3 row-start-3 row-end-4 md:row-span-1 md:col-start-5 md:col-end-6 md:mt-8">
             <div className="text-lg text-purple-600" >Customer Support</div>
             <div className="text-xs text-gray-500" >
                 For more information you can visit <a href="#" className="underline text-purple-500" >digipasal help house.</a>
             </div>
             </div>

            
             </div>   
             </div>
        </>
    )
}

export default Footer
