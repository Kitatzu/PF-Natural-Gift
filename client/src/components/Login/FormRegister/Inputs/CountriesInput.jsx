import {
    InputLabel,
    OutlinedInput,
    FormControl,
    InputAdornment,
    IconButton,
  } from "@mui/material";
  import { Icon } from "@iconify/react";
import { useSelector } from "react-redux"

const CountriesInput = ({ handleChange, handleBlur, form }) => {
    const mode = useSelector((store) => store.theme.mode);
    const Theme = useSelector((store) => store.theme);
    return(
    <FormControl
      sx={{ m: 1, width: "25ch" }}
      variant="outlined"
      className="Login-form-control"
    >
    <InputLabel
    htmlFor="outlined-adornment-lastname"
    style={{ color: Theme[mode].textPrimary }}
    >
    Country 
    </InputLabel>
    <OutlinedInput
        id="outlined-adornment-email"
        name="Country"
        type={"text"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.Country}
        className="Login-Input"
        style={{ color: Theme[mode].textPrimary }}
        required
        endAdornment={
        <InputAdornment position="end">
            <IconButton edge="end">
            <Icon
            icon="majesticons:globe-earth-2-line"
            style={{ color: Theme[mode].textPrimary }}
        />
        </IconButton>
        </InputAdornment>
        }
        label="Country"
      />
    </FormControl>
    )
};
export default CountriesInput;
