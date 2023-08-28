import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import Button from '../../components/button/button.component'

const SignIn = () => {
    const logGoogleUser = async()=> {
        const {user} = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user)
    }


  return (
    <div>
        <h1>SignIn Page</h1>
        <Button buttonType="google" onClick={logGoogleUser} text="Sign in with Google"></Button>
        <SignUpForm/>
    </div>
  )
}

export default SignIn