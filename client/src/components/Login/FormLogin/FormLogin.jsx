import { React } from "react";
import { Icon } from "@iconify/react";
import "./FormLogin.scss";
import { Button } from "@mui/material";
import EmailInput from "./Inputs/EmailInput";
import { Box } from "@mui/system";
import PasswordInput from "./Inputs/PasswordInput";
import { Alert } from "@mui/material";
import { GoogleLogin } from 'react-google-login';


function FormLogin({ handleChange, handleBlur, handleSubmits, form, errors }) {
  const responseGoogle = (response) => {
    console.log(response)
  }
  console.log(handleSubmits)
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
    clientId="416109201338-lvmsqu9ckpmtegecqomqrbea6js15eic.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
      </Box>
    </form>
  );
}

export default FormLogin;
