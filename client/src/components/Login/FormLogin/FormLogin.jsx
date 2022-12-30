import { React, useEffect } from "react";
import { Icon } from "@iconify/react";
import "./FormLogin.scss";
import { Button } from "@mui/material";
import EmailInput from "./Inputs/EmailInput";
import { Box } from "@mui/system";
import PasswordInput from "./Inputs/PasswordInput";
import { Alert } from "@mui/material";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../Redux/Thunks/LoginUser";
function FormLogin({ handleChange, handleBlur, handleSubmits, form, errors }) {
  const dispatch = useDispatch();
  const clientId =
    "797157267486-lvn1qtius6tu6hq7drjcem2os94c9t1o.apps.googleusercontent.com";
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientId,
      });
    };
    gapi.load("client:auth2", start);
  }, []);
  const responseGooglesuccess = (response) => {
    const Token = response.accessToken;
    const formGoogle = {};
    formGoogle.firstName = response.profileObj.givenName;
    formGoogle.lastName = response.profileObj.familyName;
    formGoogle.userName =
      response.profileObj.givenName + response.profileObj.familyName + Token;
    formGoogle.email = response.profileObj.email;
    formGoogle.avatar = response.profileObj.imageUrl;
    formGoogle.password = response.Ca;
    formGoogle.country = "Google";
    console.log(formGoogle, Token);
    dispatch(loginUser("google", formGoogle, Token));
  };
  const responseGoogleFailure = (response) => {
    console.log(response);
  };
  return (
    <form className="Form">
      <h2>LOGIN</h2>
      <EmailInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmits={handleSubmits}
        form={form}
      />
      {errors.email !== undefined ? (
        <Alert severity="error">{errors.email}</Alert>
      ) : null}
      <PasswordInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmits={handleSubmits}
        form={form}
      />
      {errors.password !== undefined ? (
        <Alert severity="error">{errors.password}</Alert>
      ) : null}

      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          className="Form-button login-button"
          startIcon={<Icon className="IconL" icon="ph:sign-in-light" />}
          onClick={handleSubmits}
        >
          Login
        </Button>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={responseGooglesuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </Box>
    </form>
  );
}

export default FormLogin;
