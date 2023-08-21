import React from 'react'
import { signInWithGooglePopup,signInWithFacebookPopup } from '../../utils/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async()=> {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    const logFacebookUser = async()=> {
        const response = await signInWithFacebookPopup();
        console.log(response);
    }

  return (
    <div>
        <h1>SignIn Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google</button>
        <button onClick={logFacebookUser}>Sign in with Facebook</button>
    </div>
  )
}

export default SignIn