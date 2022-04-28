import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./style.css";
import Credit from "./Credit";
import Paypal from "./Paypal";
import MainPricingDashboard from "../MainPricingDashboard/MainPricingDashboard";

export default function SetupPayment(props) {
  const [credit, setCredit] = useState(true);
  const [debit, setDebit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <React.Fragment>
      <MainPricingDashboard>
        <Grid sx={{ backgroundColor: "#0f0f11" }}>
          {/* Hero unit */}

          {/* End hero unit */}
          <Container
            maxWidth="lg"
            component="main"
            sx={{ backgroundColor: "none", height: "100vh" }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <h1>Set up your payment</h1>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <p>Your membership starts as soon as you set up payment. </p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Checkbox
                defaultChecked
                size="small"
                style={{
                  transform: "scale(0.7)",
                }}
              />
              <p>No commitments, cancel any time. </p>
              <Checkbox
                defaultChecked
                size="small"
                style={{
                  transform: "scale(0.7)",
                }}
              />
              <p> Cancel online any time</p>
            </Grid>

            <Container component="main" maxWidth="xs">
              <Box
                px={3}
                sx={{
                  marginTop: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#141415",
                  borderRadius: 2,
                  border: "1px solid rgb(41, 41, 41)",
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item md={6} sm={6} xs={6}>
                    {" "}
                    <Button
                      fullWidth
                      variant={credit ? "contained" : "outlined"}
                      sx={{ fontSize: 12 }}
                      onClick={() => {
                        setDebit(false);
                        setCredit(true);
                      }}
                    >
                      Credit or Debit Card
                    </Button>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                    {" "}
                    <Button
                      fullWidth
                      variant={debit ? "contained" : "outlined"}
                      sx={{ fontSize: 12, m: 1 }}
                      onClick={() => {
                        setDebit(true);
                        setCredit(false);
                      }}
                    >
                      PayPal{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              {/* {props.children} */}
              {credit ? <Credit /> : <Paypal />}
            </Container>
          </Container>
        </Grid>
      </MainPricingDashboard>
    </React.Fragment>
  );
}

// export default function Pricing() {
//   return <PricingContent />;
// }
