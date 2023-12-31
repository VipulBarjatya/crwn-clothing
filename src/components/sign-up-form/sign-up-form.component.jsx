import { useState } from "react";
import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const initialFormState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(initialFormState);
  const { displayName, email, password, confirmPassword } = formFields;


  const resetFormState = () => {
    console.log("hello");
    return setFormFields(initialFormState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!password === confirmPassword) {
      alert("Passwords do not match");
    }

    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });

      resetFormState();
    } catch (error) {
      if (error.code === "auth/email-already-in") {
        alert("Email already in use");
      } else {
        console.error(`error Signing up user: `, error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I do not have a account</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="User Name"
          type="text"
          onChange={handleChange}
          required
          name="displayName"
          value={displayName}
        />
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
        <FormInput
         label="Confirm Password"
          type="password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button text="Login" ></Button>
      </form>
    </div>
  );
};

export default SignUpForm;
