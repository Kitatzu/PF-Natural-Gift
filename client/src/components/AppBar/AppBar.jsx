import { useSelector } from "react-redux";
import { useState } from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { Redirect } from "react-router-dom";
import bgAppBar from "../Assets/img/appbar.png";
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

        display: { xs: "block", sm: "none" },
      }}
    >
      <img
        src={bgAppBar}
        alt="appbar"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
      {redir && <Redirect to={redir} />}
      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
        display={"flex"}
        flexDirection="row"
        justifyContent="space-between"
      >
        <IconButton
          size="large"
          onClick={() => setRedir("/productos")}
          sx={{ margin: "0 30px" }}
        >
          <Icon icon="material-symbols:store-outline" color="#f2f2f2" />
        </IconButton>
        <button
          size="large"
          onClick={() => setRedir("/home")}
          style={{
            marginBottom: "50px",
            position: "absolute",
            width: "60px",
            height: "60px",
            left: "calc(50% - 30px)",
            background: Theme[mode].appbar,
            borderRadius: "50%",
            bottom: "-20px",
            border: "none",
            boxShadow:
              "0px 41px 43px rgba(86, 86, 86, 0.25), 0px 17.1288px 17.9644px rgba(86, 86, 86, 0.179714), 0px 9.15789px 9.60461px rgba(86, 86, 86, 0.149027), 0px 5.13384px 5.38427px rgba(86, 86, 86, 0.125), 0px 2.72654px 2.85954px rgba(86, 86, 86, 0.100973), 0px 1.13458px 1.18992px rgba(86, 86, 86, 0.0702864)",
            borderLeft: "1px solid rgba(255,255,255,.1)",
            borderBottom: "1px solid rgba(255,255,255,.1)",
            borderRight: "2px solid rgba(255,255,255,.3)",
            borderTop: "2px solid rgba(255,255,255,.3)",
          }}
        >
          <Icon
            icon="material-symbols:home-app-logo"
            color="#f2f2f2"
            width={"40px"}
          />
        </button>
        <IconButton size="large" sx={{ margin: "0 30px" }}>
          <Icon icon="material-symbols:info-rounded" color="#f2f2f2" />
        </IconButton>
      </Box>
    </Box>
  );
};
export default AppBar;
