import { Input, Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FilterPrice.scss";
import { filterPrice } from "../../Redux/Slices/setProducts";
import { filterProduct } from "../../Redux/Slices/setProducts";

function FilterPrice() {
  const dispatch = useDispatch();
  const { mode } = useSelector((store) => store.theme);
  const theme = useSelector((store) => store.theme);
  function handlePrice(e) {
    dispatch(filterPrice({ name: e.target.name, value: e.target.value }));
    dispatch(filterProduct());
    console.log(e.target.name, e.target.value);
  }
  return (
    <Box padding={"20px"}>
      <Typography sx={{ color: theme[mode].textPrimary }}>
        Filtrar por precio.
      </Typography>
      <Box padding={"5px 0"}>
        <Typography color={"primary"} fontSize="14px">
          min
        </Typography>
        <Input
          name="min"
          type="number"
          defaultValue={0}
          sx={{ color: theme[mode].textPrimary }}
          onChange={handlePrice}
        />
      </Box>
      <Box padding={"5px 0"}>
        <Typography color={"primary"} fontSize="14px">
          max
        </Typography>
        <Input
          name="max"
          type="number"
          sx={{ color: theme[mode].textPrimary }}
          defaultValue={0}
          onChange={handlePrice}
        />
      </Box>
    </Box>
  );
}

export default FilterPrice;
