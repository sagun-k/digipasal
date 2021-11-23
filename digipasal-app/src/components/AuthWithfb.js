import firebase from "firebase/compat/app"
import {facebookProvider} from '../Config/Config'
const AuthWithfb = (provider) => {
    firebase.auth().signInWithPopup(provider).then((res)=>{
        return res.user;
    }).catch((err) => {
        return err;
    });
}

export default AuthWithfb
