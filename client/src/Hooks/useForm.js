import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { loginUser } from "../Redux/Thunks/LoginUser";
import { RegisterUser } from "../Redux/Thunks/RegisterUser";
export const useForm = (initialForm, validateForm, localeErrors) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e, type) => {
    if (type === "country" && type !== undefined) {
      form.country = e.target.attributes.value.value;
    }
    if (e.target.name === "verifypassword") {
      if (e.target.value !== form.registerpassword) {
        setErrors({ ...errors, verifypassword: "The passwords not match" });
      }
    }
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors({
      ...errors,
      ...validateForm(e.target.name, form[e.target.name]),
    });
    console.log(errors);
  };

  const handleSubmit = (e) => {
    console.log(errors, form);
    if (
      errors.age === undefined &&
      errors.lastname === undefined &&
      errors.name === undefined &&
      errors.registerEmail === undefined &&
      errors.registerpassword === undefined &&
      errors.verifypassword === undefined &&
      form.age !== undefined &&
      form.lastname !== undefined &&
      form.name !== undefined &&
      form.registerEmail !== undefined &&
      form.registerpassword !== undefined &&
      form.verifypassword !== undefined &&
      form.age !== "" &&
      form.lastname !== "" &&
      form.name !== "" &&
      form.registerEmail !== "" &&
      form.registerpassword !== "" &&
      form.verifypassword !== ""
    ) {
      const formSend = {};

      formSend.firstName = form.name;
      formSend.lastName = form.lastname;
      formSend.userName = form.name + form.lastname + form.age;
      formSend.email = form.registerEmail;
      formSend.password = form.registerpassword;
      formSend.country = form.country;
      console.log(formSend);
      (async () => {
        await dispatch(RegisterUser(formSend));
      })();
    } else {
      Swal.fire({
        icon: "error",
        title: "Form",
        text: "Completar el formulario!",
      });
    }
  };

  const handleSubmits = (e) => {
    if (
      errors.email === undefined &&
      errors.password === undefined &&
      form.email !== undefined &&
      form.password !== undefined &&
      form.email !== "" &&
      form.password !== ""
    ) {
      const formSend = {};
      formSend.email = form.email;
      formSend.password = form.password;
      (async () => {
        await dispatch(loginUser("local", formSend));
      })();
    } else {
      Swal.fire({
        icon: "error",
        title: "Form",
        text: "Completar el formulario!",
      });
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleSubmits,
  };
};
