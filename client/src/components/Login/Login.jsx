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
  };

  const validationsForm = (form) => {
    let errors = {};

    if (!form.email.trim()) {
      errors.email = "The email field is require";
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
        </Grid2>
        <Grid2 xs={6} sm={6} xl={6}>
          <img src={Presentation} alt="Natural gift" />
        </Grid2>
      </Grid2>
      <Waves />
    </div>
  );
};
export default Login;
