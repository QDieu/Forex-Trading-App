import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./style.css";
import facebook from "../../assets/Icons/facebook.png";
import google from "../../assets/Icons/google.png";
import linkedin from "../../assets/Icons/linkedin.png";
import orange from "../../assets/Icons/orange.png";
import MainScreen from "../MainScreen/MainScreen";
import { Link } from "react-router-dom";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <MainScreen>
      <Grid
        className="leftSide"
        xs={12}
        sm={12}
        md={6}
        lg={5.5}
        sx={{ padding: 5, paddingRight: { lg: 15, md: 0, sm: 0 } }}
        square
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{ height: "100vh" }}
          >
            <Grid>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1, width: { md: 450, sm: 350, xs: 300 } }}
              >
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
                <h1>Welcome Back!</h1>
                <p style={{ marginBottom: 20 }}>
                  Stocks, Forex, Indices, Bonds, Equities
                </p>

                <Grid>
                  <h5>Email address</h5>
                </Grid>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },
                  }}
                  inputProps={{
                    style: { height: 25, color: "#cfcfd1", fontSize: 12 },
                  }}
                  className="inputField"
                  margin="normal"
                  placeholder="Enter email address"
                  required
                  fullWidth
                  id="email"
                  size="small"
                  name="email"
                  autoComplete="email"
                />
                <Grid>
                  <h5>Password</h5>
                </Grid>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root ": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },
                  }}
                  inputProps={{
                    style: { height: 25, color: "#cfcfd1", fontSize: 12 },
                  }}
                  className="inputField"
                  margin="normal"
                  placeholder="Enter password"
                  required
                  fullWidth
                  size="small"
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Link
                    to={"/forgotPassword"}
                    style={{
                      textDecoration: "none",
                      color: "#737374",
                      fontSize: 12,
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    height: 45,
                    textTransform: "capitalize",
                    mt: 3,
                    mb: 2,
                    backgroundColor: "#ee6535",
                  }}
                >
                  Sign In
                </Button>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <p>Or continue with this social profile</p>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                  <span className="icon">
                    <img src={google} width="30px" height="30px" />
                  </span>
                  <span className="icon">
                    <img src={facebook} width="30px" height="30px" />
                  </span>
                  <span className="icon">
                    <img src={linkedin} width="30px" height="30px" />
                  </span>
                </Grid>
              </Box>
            </Grid>
            <Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p style={{ color: "rgb(209, 209, 209)" }}>
                  Don't have an account? &nbsp;
                </p>

                <Link
                  to="/preSignUp"
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  Sign Up
                </Link>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p>Copyright &copy; 2022 Traider. All Rights Reserved</p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </MainScreen>
  );
}
