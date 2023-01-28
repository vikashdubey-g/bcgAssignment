import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { useHistory } from "react-router-dom";
import { PageRoutes } from "../App";

const useStyles = () => {
  const theme = useTheme();
  return {
    card: {
      width: "285px",
      marginTop: theme.spacing(2),
    },
    cardHeader: {
      paddingBottom: 1,
      paddingTop: 1,
    },
    cardContaintRoot: {
      display: "flex",
      columnGap: theme.spacing(2),
    },
    cardContentText: {
      fontWeight: "400",
      fontSize: "14px",
    },
    cardHeaderTitle: {
      fontWeight: "600",
      fontSize: "17px",
      lineHeight: "23px",
    },
    circle: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      background: "#808080",
    },
    icon: {
      cursor: "pointer",
      opacity: "0.8",
    },
  };
};

const CommonCard = ({ data, key }) => {
  const { name, email, location, title } = data;
  const history = useHistory();
  const classes = useStyles();

  const handleEmailClick = () => {
    history.push({ pathname: PageRoutes.mailBox, state: email });
  };

  return (
    <Card variant="outlined" sx={classes.card} key={key}>
      <CardHeader
        sx={classes.cardHeader}
        avatar={<Box sx={classes.circle} />}
        title={
          <>
            <Typography sx={classes.cardHeaderTitle}>{name}</Typography>
            <Typography>{title}</Typography>
          </>
        }
      />
      <CardContent sx={classes.cardContaintRoot}>
        <EmailIcon sx={classes.icon} onClick={handleEmailClick} />
        <Typography sx={classes.cardContentText}>{location}</Typography>
      </CardContent>
    </Card>
  );
};

export default CommonCard;
