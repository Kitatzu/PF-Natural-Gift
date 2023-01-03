import { useSelector } from "react-redux";
import { useState } from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Redirect } from "react-router-dom";
const AppBar = () => {
  const Theme = useSelector((store) => store.theme);
  const mode = useSelector((store) => store.theme.mode);

  const [redir, setRedir] = useState(null);
  return (
    <Box
      sx={{
        position: "fixed",
        zIndex: 999999999999,
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "10px",
        display: { xs: "block", sm: "none" },
      }}
    >
      {redir && <Redirect to={redir} />}
      <Box
        sx={{
          borderRadius: "10px",
          background: Theme[mode].appbar,
          position: "relative",
        }}
        display={"flex"}
        flexDirection="row"
        justifyContent={"space-around"}
      >
        <IconButton size="large" onClick={() => setRedir("/productos")}>
          <Icon icon="material-symbols:store-outline" color="#f2f2f2" />
        </IconButton>
        <IconButton size="large" onClick={() => setRedir("/home")}>
          <Icon icon="material-symbols:home-app-logo" color="#f2f2f2" />
        </IconButton>
        <IconButton size="large">
          <Icon icon="material-symbols:info-rounded" color="#f2f2f2" />
        </IconButton>
      </Box>
    </Box>
  );
};
export default AppBar;
