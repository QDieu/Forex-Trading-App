import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";

import "./style.css";
import orange from "../../assets/Icons/orange.png";
import StickyFooter from "../Footer/Footer";
import Pricing from "../PricingScreen/Pricing";
import SetupPayment from "../SetupPaymentScreen/SetupPayment";

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

function PricingContent() {
  return (
    <React.Fragment>
      <Grid sx={{ backgroundColor: "#0f0f11" }}>
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
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>

        {/* Hero unit */}
    {/* <Pricing/> */}
    <SetupPayment/>
        {/* End hero unit */}
     
      </Grid>
      <StickyFooter/>
    </React.Fragment>
  );
}

export default function MainPricingScreen() {
  return <PricingContent />;
}
