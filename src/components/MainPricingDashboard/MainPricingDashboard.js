import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import GlobalStyles from "@mui/material/GlobalStyles";

import "./style.css";
import orange from "../../assets/Icons/orange.png";
import StickyFooter from "../Footer/Footer";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    btn: "Try For Free",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "10 GB of storage",
      "Help center access",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
    btn: "Get Started Now",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
    btn: "Get Pro Plan",
  },
];

export default function MainPricingDashboard(props) {
  return (
    <React.Fragment>
      <Grid
        sx={{
          height: { lg: "140vh", md: "110vh", sm: "200vh", xs: "270vh" },
          backgroundColor: "#0f0f11",
        }}
      >
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <Box sx={{ flexGrow: 1, backgroundColor: "#0f0f11" }}>
          <AppBar position="static" sx={{ backgroundColor: "#0f0f11" }}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <span style={{ marginRight: 10 }}>
                  <img src={orange} width="25px" height="25px" />{" "}
                </span>
                <h2> Traider</h2>
              </Grid>
              <Button color="inherit">
                <AccountCircleIcon
                  style={{ color: "#ee6535", width: 45, height: 45 }}
                />
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        {props.children}
      </Grid>
      <StickyFooter />
    </React.Fragment>
  );
}
