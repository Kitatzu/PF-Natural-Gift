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
import { useForm } from "../../utils/useForm";

const Login = () => {
  const initialForm = {};

  const validationsForm = (form) => {};

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

  const theme = useSelector((state) => state.theme.mode);
  const lightTheme = useSelector((state) => state.theme.light);
  const darkTheme = useSelector((state) => state.theme.dark);

  console.log(lightTheme);
  return (
    <div
      className="Login-container"
      style={
        theme === "dark"
          ? { background: darkTheme.primary }
          : { background: lightTheme.primary }
      }
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
            />
          ) : (
            <FormRegister
              form={form}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
            />
          )}
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
