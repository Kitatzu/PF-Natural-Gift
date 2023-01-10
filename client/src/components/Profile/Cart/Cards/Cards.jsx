import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  IconButton,
  Input,
} from "@mui/material";
import bgDefault from "../../../Assets/img/imgDefault.png";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
const Cards = ({ price, name, quantity }) => {
  const Theme = useSelector((store) => store.theme);
  const mode = useSelector((store) => store.theme.mode);
  return (
    <Card
      sx={{
        width: { sx: "100%", sm: "400px" },
        background: Theme[mode].card,
        height: "200px",
        margin: "20px 0",
      }}
      variant="outlined"
    >
      <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box width={"30%"}>
          <img style={{ width: "100%" }} src={bgDefault} alt="Product" />
        </Box>
        <Box width={"70%"} padding="10px">
          <Box>
            <Typography
              sx={{ color: Theme[mode].textPrimary }}
              fontWeight="bold"
            >
              {name}
            </Typography>
          </Box>
          <Box padding={"5px 0px"}>
            <Typography
              color="primary"
              component="span"
              fontSize={"12px"}
              sx={{ color: Theme[mode].textPrimary }}
            >
              4 Feb 2022
            </Typography>
          </Box>
          <Box
            sx={{ width: "100%" }}
            display="flex"
            justifyContent={"space-between"}
          >
            <Chip label={price + "$"} color="secondary" />
            <IconButton>
              <Icon icon="mdi:trash-can" color="#D3232F" />
            </IconButton>
          </Box>

          <Box display={"flex"} gap="20px" padding="5px 0">
            <Chip label="Cantidad" sx={{ color: Theme[mode].textPrimary }} />
            <Box width={"40px"}>
              <Input
                type="number"
                defaultValue={quantity}
                sx={{ color: Theme[mode].textPrimary }}
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
export default Cards;
