import { React } from "react";
import { Icon } from "@iconify/react";
import "./FormLogin.scss";
import { Button } from "@mui/material";
import EmailInput from "./Inputs/EmailInput";
import { Box } from "@mui/system";
import PasswordInput from "./Inputs/PasswordInput";

function FormLogin({ handleChange, handleBlur, handleSubmit, form }) {
  return (
    <form className="Form">
      <h2>Login</h2>
      <EmailInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        form={form}
      />

      <PasswordInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        form={form}
      />

      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          className="Form-button login-button"
          startIcon={<Icon className="IconL" icon="ph:sign-in-light" />}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon className="IconG" icon="logos:google-icon" />}
          className="Google-button"
        >
          Login Google
        </Button>
      </Box>
    </form>
  );
}

export default FormLogin;
