import { makeStyles, withStyles } from "@mui/styles";
import {
  Paper,
  Button,
  Typography,
  Avatar,
  AppBar,
  TextField,
  Box,
} from "@mui/material";
import {
  styled,
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/system";
//for container use width 100%
//maxwidth 1500px
const Component = styled("div")(({ theme }) => theme.unstable_sx({ p: 1 }));
export const StyleContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    justifyContent: "space-around",
    maxWidth: "1600px",
    width: "100%",
  })
);
export const StyledBox1 = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    boxSizing: "border-box",

    paddingTop: "2rem",
    paddingBottom: "1rem",
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    width: "100%",
  })
);
export const StyledBox = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    boxSizing: "border-box",
    paddingRight: { md: "50px", lg: "4rem" },
    paddingLeft: { md: "50px", lg: "4rem" },
    paddingTop: "2rem",
    paddingBottom: "1rem",
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    width: "100%",
  })
);
export const StyledImage = styled("img")(({ theme }) =>
  theme.unstable_sx({
    width: { sm: "90px", md: "110px", lg: "148.44px" },
    height: " 42.59px",
    objectFit: "contain",
    userSelect: "none",
  })
);
export const TypographyStyle = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    "fontFamily": "DM Sans",
    "fontWeight": 500,
    "fontSize": { sm: "0.7rem", md: "0.9rem", lg: "16px" },
    "lineHeight": "31px",
    "&:hover": {
      cursor: "pointer",
      color: "green !important",
      fontWeight: 700,
      transition: " color 10s",
      transitionProperty: " color",
      transitionDuration: "0.2s",
      transitionTimingFunction: "ease",
      transitionDelay: "0s",
    },
  })
);

export const StyledBoxFooter = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    boxSizing: "border-box",
    paddingRight: "100px",
    paddingLeft: "100px",
    paddingTop: "2rem",
    background: "#111111",
    paddingBottom: "2rem",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  })
);
export const FooterTypo = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    "fontSize": "1rem",
    "color": "#F3F3F3",

    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
      fontSize: "1rem",
    },
  })
);
export const FooterHeader = styled(Typography)(({ theme }) =>
  theme.unstable_sx({
    fontSize: "1.3rem",
    color: "#FFFFFF",
    fontWeight: "700",
  })
);
export const StyledTextField = styled(TextField)(({ theme }) =>
  theme.unstable_sx({
    "minWidth": {
      xs: "84%",
      sm: "100%",
      md: "90%",
      lg: "90%",
      xl: "90%",
    },
    "border": "white 3px",
    "borderStyle": "none",
    "display": { xs: "flex", md: "flex", lg: "flex", xl: "flex" },

    "background": "#ffff",
    "borderRadius": "30px",

    "outline": 0,
    "& fieldset": {
      borderRadius: "30px",
    },
    "& .MuiInputBase-root": {
      height: { xs: 70, md: "100%" },
    },
    "& input::placeholder": {
      fontSize: { xs: "30px", sm: "0.7rem" },
      paddingLeft: "1rem",
    },
  })
);
