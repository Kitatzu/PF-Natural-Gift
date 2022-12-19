import { useState } from "react";
export const useForm = (initialForm, validateForm) => {
  const [form, setform] = useState(initialForm);
  const [errors, seterrors] = useState({});
  const [loading, setloading] = useState(false);
  const [response, setresponse] = useState(null);

  const handleChange = (e) => {};

  const handleBlur = (e) => {};

  const handleSubmit = (e) => {};

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


