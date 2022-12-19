import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import { Icon } from "@iconify/react";
const EmailRegisterInput = ({ handleChange, handleBlur, form }) => {
  return (
    <FormControl
      sx={{ m: 1, width: "25ch" }}
      variant="outlined"
      className="Login-form-control"
    >
      <InputLabel htmlFor="outlined-adornment-email">E-mail</InputLabel>
      <OutlinedInput
        id="outlined-adornment-email"
        name="email"
        type={"email"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.email}
        className="Login-input"
        required
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Icon icon="ic:outline-email" />
            </IconButton>
          </InputAdornment>
        }
        label="E-mail"
      />
    </FormControl>
  );
};
export default EmailRegisterInput;
