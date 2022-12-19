import {
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
const LastNameInput = ({ handleChange, handleBlur, form }) => {
  return (
    <FormControl
      sx={{ m: 1, width: "25ch" }}
      variant="outlined"
      className="Login-form-control register-Lastname"
    >
      <InputLabel htmlFor="outlined-adornment-lastname">Lastname</InputLabel>
      <OutlinedInput
        id="outlined-adornment-lastname"
        name="lastname"
        type={"text"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.lastname}
        className="Login-input"
        required
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Icon icon="icon-park-outline:edit-name" />
            </IconButton>
          </InputAdornment>
        }
        label="LastName"
      />
    </FormControl>
  );
};
export default LastNameInput;
