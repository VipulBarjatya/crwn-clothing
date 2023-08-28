import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuth,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const initialFormState = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(initialFormState);
  const { email, password } = formFields;

  const resetFormState = () => {
    return setFormFields(initialFormState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuth(email, password);
      console.log(response);
      resetFormState();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("You entered wrong password");
      } else if (error.code === "auth/user-not-found") {
        alert("User not found");
      } else {
        console.error(error);
      }
    }
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>I Already have Account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button text="Sign In" type="submit"></Button>
          <Button
          type="button"
            buttonType="google"
            onClick={logGoogleUser}
            text="Google Sign In"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
