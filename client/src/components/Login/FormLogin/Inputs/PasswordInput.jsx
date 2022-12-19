import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { React, useState } from "react";
const PasswordInput = ({ handleChange, handleBlur, form }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl
      sx={{ m: 1, width: "25ch" }}
      variant="outlined"
      className="Login-form-control"
    >
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        className="Login-input"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <Icon icon="material-symbols:visibility-off" />
              ) : (
                <Icon icon="material-symbols:visibility" />
              )}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};
export default PasswordInput;
