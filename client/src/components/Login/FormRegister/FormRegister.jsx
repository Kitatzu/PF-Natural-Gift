import React from "react";
import "./FormRegister.scss";
import { Icon } from "@iconify/react";
import { Button, ButtonGroup } from "@mui/material";
import NameInput from "./Inputs/NameInput";
import { Box } from "@mui/system";
import LastNameInput from "./Inputs/LastNameInput";
import AgeInput from "./Inputs/AgeInput";
import PasswordRegisterInput from "./Inputs/PasswordRegisterInput";
import PasswordVerifyInput from "./Inputs/PasswordVerify";
import EmailRegisterInput from "./Inputs/EmailRegisterInput";

const FormRegister = ({ handleChange, handleBlur, handleSubmit, form }) => {
  return (
    <form className="Form">
      <h2>REGISTER</h2>
      <Box
        className="Login-form-control"
        display="flex"
        justifyContent="center"
      >
        <NameInput
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          form={form}
        />
        <LastNameInput
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          form={form}
        />
      </Box>
      <AgeInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        form={form}
      />
      <EmailRegisterInput />
      <PasswordRegisterInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        form={form}
      />
      <PasswordVerifyInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        form={form}
      />
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Icon className="IconL" icon="ph:sign-in-light" />}
          className="Form-button register-button"
        >
          Register
        </Button>
        <Button
          variant="outlined"
          startIcon={<Icon className="IconG" icon="logos:google-icon" />}
          className="Google-button"
        >
          Google
        </Button>
      </Box>
    </form>
  );
};

export default FormRegister;
