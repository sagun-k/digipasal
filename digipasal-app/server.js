const express = require('express')
const cors =  require('cors');
const {v4:uuidv4} = require('uuid')
const stripe = require('stripe')('sk_test_51Jwgr3SFDRDFYtIRTSoIrlsXaqg8E97b07YOnReg6907HBrtGeDB6ysQ0xFmpetyScDAhq0JelDjRs4M1pxErjBL00YFjqK2pp')

const app = express();
app.use(cors())
app.use(express.json());
app.get('/',(req,res=>{
    res.send("Welcome to our digipasal");
}))

app.listen(8080,()=>{
    console.log("Your app is running on 8080")
})

