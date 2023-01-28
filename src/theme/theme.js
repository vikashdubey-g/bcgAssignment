import { createTheme } from "@mui/material/styles";

export const colors = {
  green: "#228C22",
  black: "#000000",
  white: "#ffffff",
};

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          "&.Mui-selected": {
            color: colors.black,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          display: "flex",
          width: "100%",
          padding: "0 40px",
        },
        indicator: {
          backgroundColor: colors.green,
        },
      },
    },
  },
});
export default theme;
