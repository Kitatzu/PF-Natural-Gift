import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { Icon } from "@iconify/react";
import NavBar from "../../NavBar/NavBar";
import AvatarSettings from "./AvatarSettings/AvatarSettings";
import "./AccountSettings.scss";
import { useEffect, useState } from "react";

import Seguridad from "./Seguridad/Seguridad";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../../../Redux/Thunks/GetUser";
const AccountSettings = () => {
  const dispatch = useDispatch();
  const userName = JSON.parse(localStorage.getItem("token")).userName;
  useEffect(() => {
    dispatch(GetUser(userName));
  }, []);
  const [setting, setSetting] = useState("Perfil");
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);

  return (
    <div
      className="Account"
      style={{ background: Theme[mode].primary, minHeight: "100vh" }}
    >
      <NavBar />
      <Box
        display={"flex"}
        justifyContent="center"
        sx={{ padding: "40px" }}
        alignItems="center"
        flexDirection={"column"}
      >
        <Box>
          <h2 style={{ color: Theme[mode].textPrimary }}>Settings</h2>
        </Box>
        <Box sx={{ width: "max-content", minWidth: "400px" }}>
          <ul className="Account-links">
            <li>
              <Button
                startIcon={<Icon icon="mdi:user" />}
                onClick={() => setSetting("Perfil")}
                sx={{ color: Theme[mode].textPrimary }}
              >
                Perfil
              </Button>
            </li>
            <li>
              <Button
                startIcon={<Icon icon="mdi:account-security" />}
                onClick={() => setSetting("Seguridad")}
                sx={{ color: Theme[mode].textPrimary }}
              >
                Seguridad
              </Button>
            </li>
          </ul>
          <Box>
            {setting === "Perfil" && <AvatarSettings />}
            {setting === "Seguridad" && <Seguridad />}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default AccountSettings;
