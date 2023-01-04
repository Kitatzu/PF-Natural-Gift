import "./BtnSeeAll.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const BtnSeeAll = () => {
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  return (
    <div>
      <Link to="/productos">
        <Button
          variant="contained"
          color="primary"
          sx={{ color: "#272727", background: Theme[mode].buttonPrimary }}
        >
          Ver Todo
        </Button>
      </Link>
    </div>
  );
};

export default BtnSeeAll;
