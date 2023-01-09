import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Thunks/getCart";
import Cards from "./Cards/Cards";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, []);
  const { totalPrice, productsCart = false } = useSelector(
    (store) => store.cart
  );
  return (
    <Box
      display={"flex"}
      flexWrap="wrap"
      justifyContent="space-around"
      padding={"20px"}
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
      <Box width={{ xs: "100%", sm: "240px" }} padding="20px">
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
  );
};
export default Cart;
