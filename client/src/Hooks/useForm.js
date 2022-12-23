import { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../Redux/Thunks/RegisterUser";
export const useForm = (initialForm, validateForm) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
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
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    const formSend = {};

    formSend.firstName = form.name;
    formSend.userName = form.firstName + form.lastName + form.age;
    formSend.email = form.registerEmail;
    formSend.password = form.registerpassword;
    (async () => {
      dispatch(RegisterUser(formSend));
    })();
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
