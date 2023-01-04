import { InputLabel, OutlinedInput, FormControl } from "@mui/material";

import { useSelector } from "react-redux";
const UserName = ({ userName }) => {
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  return (
    <FormControl
      sx={{ m: 1, width: "100%", margin: "8px 0" }}
      variant="outlined"
      className="Login-form-control register-name"
    >
      <InputLabel
        htmlFor="outlined-adornment-name"
        style={{ color: Theme[mode].textPrimary }}
        sx={{ width: "100%" }}
      >
        UserName
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-name"
        name="name"
        type={"text"}
        className="Login-input"
        style={{ color: Theme[mode].textPrimary }}
        defaultValue={userName}
        required
        label="UserName"
      />
    </FormControl>
  );
};
export default UserName;
