import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
} from "@mui/material";
import { Icon } from "@iconify/react";
const NameInput = ({ handleChange, handleBlur, form }) => {
  return (
    <FormControl
      sx={{ m: 1, width: "25ch" }}
      variant="outlined"
      className="Login-form-control register-name"
    >
      <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
      <OutlinedInput
        id="outlined-adornment-name"
        name="name"
        type={"text"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.name}
        className="Login-input"
        required
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Icon icon="mdi:user" />
            </IconButton>
          </InputAdornment>
        }
        label="Name"
      />
    </FormControl>
  );
};
export default NameInput;
