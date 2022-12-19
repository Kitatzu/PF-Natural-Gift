import {
  InputLabel,
  OutlinedInput,
  FormControl,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";

const AgeInput = ({ handleChange, handleBlur, form }) => {
  return (
    <FormControl
      sx={{ m: 1, width: "25ch" }}
      variant="outlined"
      className="Login-form-control register-age"
    >
      <InputLabel htmlFor="outlined-adornment-age">Age</InputLabel>
      <OutlinedInput
        id="outlined-adornment-lastname"
        name="age"
        type={"number"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.age}
        className="Login-input"
        required
        label="Age"
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Icon icon="heroicons-solid:identification" />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
export default AgeInput;
