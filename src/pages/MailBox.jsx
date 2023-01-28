import { Box, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useStyles = () => {
  const theme = useTheme();
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: theme.spacing(2),
      rowGap: theme.spacing(2),
    },
  };
};

const MailBox = () => {
  const classes = useStyles();
  const [userEmail, setUserEmail] = useState("");
  const { state } = useLocation();

  useEffect(() => {
    setUserEmail(state);
  }, [state]);

  return (
    <Box sx={classes.root}>
      <Typography variant="h5">Mail-Box</Typography>
      <TextField
        id="outlined-basic"
        label="User Email"
        variant="outlined"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
    </Box>
  );
};

export default MailBox;
