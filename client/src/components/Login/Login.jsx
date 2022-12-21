import FormLogin from "./FormLogin/FormLogin";
import FormRegister from "./FormRegister/FormRegister";
import Nav from "./Nav/Nav";
import Waves from "../Waves/Waves";
import "./Login.scss";
import Presentation from "../Assets/img/Presentationlogin-presentation.png";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import "@fontsource/roboto/300.css";
import { useSelector } from "react-redux";
import { useForm } from "../../Hooks/useForm";
import { Box, Button } from "@mui/material";
const Login = () => {
  const initialForm = {
    email: "",
    password: "",
    name:"",
    age:"",
    lastName:"",
    registerpassword:"",
    verifypassword:"",
    registerEmail:"",
  };

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPass = /(?=.*[0-9])/;
    let regexPass1 = /(?=.*[!@#$%^&*])/
    let regexPass2 = /(?=.{8,})/
    let regexPass3 = /(?=.*[A-Z])/

    if (!form.email.trim()) {
      errors.email = "The Email field is require";
    } else if (!regexEmail.test(form.email.trim())){
      errors.email = "Este campo es incorrecto"
    } 
    if (!form.password.trim()) {
      errors.password = "The password field is require";
    } else if (!regexPass.test(form.password.trim())){
      errors.password = "Este campo requiere al menos 1 caracter numerico"
    } else if (!regexPass1.test(form.password.trim())){
      errors.password = "Debe contener un caracter especial"
    } else if (!regexPass2.test(form.password.trim())){
      errors.password = "Debe contener al menos 8 caracteres"
    } else if (!regexPass3.test(form.password.trim())){
      errors.password = "Debe tener al menos 1 mayùs"
    }
    if (!form.name.trim()) {
      errors.name = "The name field is require";
    } else if (!regexName.test(form.name.trim())){
      errors.name = "Solo acepta letras y espacios blancos"
    }
    if (!form.age.trim()) {
      errors.age = "The age field is require";
    }
    if (!form.lastName.trim()) {
      errors.lastName = "The last name field is require";
    }else if (!regexName.test(form.lastName.trim())){
      errors.lastName = "Solo acepta letras y espacios blancos"
    }
    if (!form.registerpassword.trim()) {
      errors.registerpassword = "The password field is require";
    }else if (!regexPass.test(form.registerpassword.trim())){
      errors.registerpassword = "Este campo requiere al menos 1 caracter numerico"
    } else if (!regexPass1.test(form.registerpassword.trim())){
      errors.registerpassword = "Debe contener un caracter especial"
    } else if (!regexPass2.test(form.registerpassword.trim())){
      errors.registerpassword = "Debe contener al menos 8 caracteres"
    }else if (!regexPass3.test(form.password.trim())){
      errors.password = "Debe tener al menos 1 mayùs"
    } else if (!form.registerpassword.include("")){
      errors.registerpassword = "No se permiten estos caracteres"
    }
    if (!form.verifypassword.trim()) {
      errors.verifypassword = "The password field is require";
    } 
    if (!form.registerEmail.trim()) {
      errors.registerEmail = "The Email field is require";
    }else if (!regexEmail.test(form.registerEmail.trim())){
      errors.registerEmail = "Este campo es incorrecto"
    }

    return errors;
  };

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const [loginType, setLoginType] = useState("login");

  const mode = useSelector((state) => state.theme.mode);
  const Theme = useSelector((state) => state.theme);
  console.log(form, errors);
  return (
    <div
      className="Login-container"
      style={{ background: Theme[mode].primary }}
    >
      <Grid2 container spacing={2}>
        <Grid2 xs={12}>
          <Nav setLoginType={setLoginType} />
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          xl={6}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          style={{ background: "none" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            style={{ background: "none" }}
            className="Form-aligned"
          >
            {loginType === "login" ? (
              <FormLogin
                form={form}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            ) : (
              <FormRegister
                form={form}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            )}
            <Box
              display="flex"
              justifyContent="space-around"
              className="Login-form-links"
            >
              {loginType === "login" ? (
                <Button
                  variant="text"
                  onClick={() => setLoginType("register")}
                  style={{ color: Theme[mode].textPrimary }}
                >
                  Register
                </Button>
              ) : (
                <Button
                  variant="text"
                  onClick={() => setLoginType("login")}
                  style={{ color: Theme[mode].textPrimary }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Box>
        </Grid2>
        <Grid2 xs={6} sm={6} xl={6} className="Image-display">
          <img src={Presentation} alt="Natural gift" />
        </Grid2>
      </Grid2>
      <Waves />
    </div>
  );
};
export default Login;
