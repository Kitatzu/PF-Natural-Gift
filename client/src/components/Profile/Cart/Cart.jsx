import { Button, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Redux/Thunks/getCart";
import AppBar from "../../AppBar/AppBar";
import NavBar from "../../NavBar/NavBar";
import Cards from "./Cards/Cards";
import ReactDOM from "react-dom";
import React from "react";
import Swal from "sweetalert2";
import { createFactura, stockProucts } from "../../../Redux/Thunks/factura";
import { Redirect } from "react-router-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
const Cart = () => {
  const dispatch = useDispatch();
  const Theme = useSelector((store) => store.theme);
  const mode = useSelector((store) => store.theme.mode);
  const { redir } = useSelector((store) => store.factura);
  let userId = JSON.parse(localStorage.getItem("token"))
    ? JSON.parse(localStorage.getItem("token")).userId
    : null;
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  const { totalPrice, productsCart = false } = useSelector(
    (store) => store.cart
  );
  const sendProducts =
    productsCart.length > 0
      ? productsCart.map((p) => {
          return {
            productId: p.product.id,
            stock:
              p.product.stock - p.quantity >= 0
                ? p.product.stock - p.quantity
                : 0,
          };
        })
      : null;
  console.log(sendProducts);
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPrice,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    console.log(data, actions);
    console.log(actions.order.capture());
    await dispatch(
      createFactura(data.orderID, data.payerID, userId, productsCart)
    );
    await dispatch(stockProucts(sendProducts));
    return actions.order.capture();
  };
  return (
    <Box sx={{ background: Theme[mode].primary, minHeight: "100vh" }}>
      {redir ? <Redirect to={"/factura"} /> : null}
      <NavBar />
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
        <Box
          width={{ xs: "100%", sm: "340px" }}
          padding="20px"
          sx={{ marginBottom: "100px !important" }}
        >
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
                  <Box>
                    <PayPalButton
                      createOrder={(data, actions) =>
                        createOrder(data, actions)
                      }
                      onApprove={(data, actions) => onApprove(data, actions)}
                    />
                  </Box>
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
