import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Thunks/getCart";
import AppBar from "../../AppBar/AppBar";
import NavBar from "../../NavBar/NavBar";
import Cards from "./Cards/Cards";

const Cart = () => {
  const dispatch = useDispatch();
  const Theme = useSelector((store) => store.theme);
  const mode = useSelector((store) => store.theme.mode);
  useEffect(() => {
    dispatch(getCart());
  }, []);
  const { totalPrice, productsCart = false } = useSelector(
    (store) => store.cart
  );
  return (
    <Box sx={{ background: Theme[mode].primary }}>
      <NavBar />
      <Box
        display={"flex"}
        flexWrap="wrap"
        justifyContent="space-around"
        padding={"20px"}
        marginBottom="90px"
      >
        <Box>
          {productsCart
            ? productsCart.map((product) => (
                <Cards
                  price={product.product.price}
                  quantity={product.quantity}
                  name={product.product.name}
                />
              ))
            : null}
        </Box>
        <Box width={{ xs: "100%", sm: "340px" }} padding="20px">
          <Card>
            <CardContent>
              <Box>
                <Typography>Total</Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold" fontSize="24px">
                  {totalPrice + "$"}
                </Typography>
                <Box padding={"10px"}>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ width: "100%" }}
                  >
                    PAGAR
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <AppBar />
    </Box>
  );
};
export default Cart;