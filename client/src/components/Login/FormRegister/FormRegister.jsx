import React from "react";
import "./FormRegister.scss";
import { Icon } from "@iconify/react";
import { Button} from "@mui/material";
import NameInput from "./Inputs/NameInput";
import { Box } from "@mui/system";
import LastNameInput from "./Inputs/LastNameInput";
import AgeInput from "./Inputs/AgeInput";
import PasswordRegisterInput from "./Inputs/PasswordRegisterInput";
import PasswordVerifyInput from "./Inputs/PasswordVerify";
import EmailRegisterInput from "./Inputs/EmailRegisterInput";
import { Alert } from "@mui/material";
const FormRegister = ({ handleChange, handleBlur, handleSubmit, form, errors }) => {

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
        {errors.name !== undefined ? (
        <Alert severity="error">{errors.name}</Alert>
      ) : null}
        <LastNameInput
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          form={form}
          
        />
        {errors.lastName !== undefined ? (
        <Alert severity="error">{errors.lastName}</Alert>
      ) : null}
      </Box>
      <AgeInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        form={form}
        
      />
      {errors.age !== undefined ? (
        <Alert severity="error">{errors.age}</Alert>
      ) : null}
      <EmailRegisterInput 
      handleChange={handleChange}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
      form={form}
      
      />
      {errors.registerEmail !== undefined ? (
        <Alert severity="error">{errors.registerEmail}</Alert>
      ) : null}
      <PasswordRegisterInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        form={form}
        
      />
      {errors.registerpassword !== undefined ? (
        <Alert severity="error">{errors.registerpassword}</Alert>
      ) : null}
      <PasswordVerifyInput
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
        form={form}
      />
      {errors.verifypassword !== undefined ? (
        <Alert severity="error">{errors.verifypassword}</Alert>
      ) : null}
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Icon className="IconL" icon="ph:sign-in-light" />}
          className="Form-button register-button"
          onClick={handleSubmit}
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
