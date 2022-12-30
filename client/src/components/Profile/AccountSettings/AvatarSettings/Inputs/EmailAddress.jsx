import { InputLabel, OutlinedInput, FormControl } from "@mui/material";

import { useSelector } from "react-redux";
const EmailAddress = ({ email }) => {
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  console.log(email);
  return (
    <FormControl
      sx={{ m: 1, width: "100%", margin: "8px 0" }}
      variant="outlined"
      className="Login-form-control"
    >
      <InputLabel
        htmlFor="outlined-adornment-email"
        style={{ color: Theme[mode].textPrimary }}
      >
        E-mail
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-email"
        name="registerEmail"
        type={"email"}
        className="Login-input"
        style={{ color: Theme[mode].textPrimary }}
        value={email}
        required
        label="E-mail"
      />
    </FormControl>
  );
};
export default EmailAddress;
