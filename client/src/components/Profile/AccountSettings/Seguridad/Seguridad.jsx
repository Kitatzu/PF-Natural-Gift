import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import Password from "./Inputs/Password";
import { useSelector } from "react-redux";
const Seguridad = () => {
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  return (
    <Card
      variant="outlined"
      sx={{ width: "100%", background: Theme[mode].primary }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={Theme[mode].textPrimary}
          gutterBottom
        >
          Notificaciones
        </Typography>
        <Box component={"form"} display="flex" flexDirection={"column"}>
          <Password name={"currentPassword"} label="Current Password" />
          <Password name={"newPassword"} label="New Password" />
          <Password name={"confirmPassword"} label="Confirm Password" />
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          sx={{ background: Theme[mode].buttonPrimary }}
        >
          Guardar
        </Button>
      </CardActions>
    </Card>
  );
};
export default Seguridad;
