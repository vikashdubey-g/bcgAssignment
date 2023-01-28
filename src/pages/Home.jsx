import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import CommonCard from "../components/CommonCard";
import authorRequestorDetail from "../data/authorRequestorDetails.json";
import { colors } from "../theme/theme";

const useStyles = () => {
  const theme = useTheme();
  return {
    tabPanel: {
      display: "flex",
      columnGap: theme.spacing(2),
    },
    count: {
      backgroundColor: colors.green,
      width: "25px",
      height: "20px",
      borderRadius: theme.spacing(1),
      color: colors.white,
      padding: theme.spacing(0.5),
    },
    countContainer: {
      display: "flex",
      columnGap: theme.spacing(2),
    },
  };
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {authorRequestorDetail?.map(({ heading }, ind) => (
            <Tab
              label={
                <Box sx={classes.countContainer}>
                  <Typography>{heading}</Typography>
                  {(authorRequestorDetail[value]?.data.length > 2 &&
                    heading === "Authors" )&& (
                      <Box sx={classes.count}>
                        {authorRequestorDetail[value]?.data.length}
                      </Box>
                    )}
                </Box>
              }
              {...a11yProps(ind)}
            ></Tab>
          ))}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box sx={classes.tabPanel}>
          {authorRequestorDetail[value]?.data.map((authorData, ind) => (
            <CommonCard key={ind} data={authorData} />
          ))}
        </Box>
      </TabPanel>

      <TabPanel sx={classes.tabPanel} value={value} index={1}>
        <Box sx={classes.tabPanel}>
          {authorRequestorDetail[value]?.data.map((requestorData, ind) => (
            <CommonCard key={ind} data={requestorData} />
          ))}
        </Box>
      </TabPanel>
    </Box>
  );
};

export default Home;
