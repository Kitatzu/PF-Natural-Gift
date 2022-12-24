import { useState } from "react";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../Redux/Thunks/RegisterUser";
export const useForm = (initialForm, validateForm) => {
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
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
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
