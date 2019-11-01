import { createMuiTheme } from "@material-ui/core/styles";

const tema = createMuiTheme({
  palette: {
    primary: {
      main: "#4C7DB5"
    },
    secondary: {
      main: "#FF6339"
    },
    background: {
      default: "#FFFFFF",
      primary: "#292F36"
    },
  },
  shadows: Array(25).fill("none"),
  status: {
    danger: "orange"
  },
  typography: {
    fontFamily: "Lato",
    useNextVariants: true
  }
});

export default tema;
