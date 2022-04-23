import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontSize } from "@mui/system";
import "./style.css";
import facebook from "../../assets/Icons/facebook.png";
import google from "../../assets/Icons/google.png";
import linkedin from "../../assets/Icons/linkedin.png";
import orange from "../../assets/Icons/orange.png";
import { red } from "@mui/material/colors";

const theme = createTheme();

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
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", backgroundColor: "#0f0f11", color: "white" }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={5.5}
          sx={{
            backgroundImage: "url(/Images/orange.webp)",
            backgroundRepeat: "no-repeat",
            margin: 6,
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#ee6535",
          }}
        >
          <Grid
            sx={{
              height: "80vh",
              padding: 2,
            }}
            container
            direction="column"
            justifyContent="space-between"
          >
            <Grid>
              {" "}
              <h1 className="leftHeading">
                Trade, track and manage brokers on TRAIDER.
              </h1>
            </Grid>
            <Grid>
              <h2 className="leftHeadingBottom">Stocks</h2>
            </Grid>
          </Grid>
        </Grid>

        {/* right side */}

        <Grid
          className="leftSide"
          item
          xs={12}
          sm={8}
          md={5.5}
          sx={{ padding: 5, paddingRight: 15 }}
          square
        >
          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <Typography component="h1" variant="h5">
              Sign in
            </Typography> */}
            {/* <Grid container> */}

            {/* </Grid> */}

            <Grid
              container
              direction="column"
              justifyContent="space-between"
              sx={{ height: "88vh" }}
            >
              <Grid>
                {" "}
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <Grid
                   container
                   direction="row"
                   justifyContent="flex-start"
                   alignItems="center"
                  >
                    <span style={{marginRight:10}}>
                      <img src={orange} width="25px" height="25px" />{" "}
                    </span>
                    <h2> Traider</h2>
                  </Grid>
                  <h1>Welcome Back!</h1>
                  <p style={{ marginBottom: 20 }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Impedit, iusto mollitia a consequuntur, incidunt totam
                    obcaecati repellendus unde quidem
                  </p>

                  <Grid>
                    <h5>Email address</h5>
                  </Grid>
                  <TextField
                    // variant="filled"
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
                    className="inputField"
                    margin="normal"
                    placeholder="Enter email address"
                    required
                    fullWidth
                    id="email"
                    size="small"
                    // label="Email Address"
                    name="email"
                    autoComplete="email"
                    // autoFocus
                    inputProps={{ style: { color: "#737374", fontSize: 13 } }}
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
                    // variant="outlined"
                    inputProps={{ style: { color: "#737374", fontSize: 13 } }}
                    margin="normal"
                    placeholder="Enter password"
                    required
                    size="small"
                    className="inputField"
                    fullWidth
                    name="password"
                    // label="Password"
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
                      href="#"
                      variant="body2"
                      underline="none"
                      sx={{ color: "#737374" }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#ee6535" }}
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
                      <img src={google} width="20px" height="20px" />
                    </span>
                    <span className="icon">
                      <img src={facebook} width="20px" height="20px" />
                    </span>
                    <span className="icon">
                      <img src={linkedin} width="20px" height="20px" />{" "}
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
                    href="#"
                    variant="body2"
                    href="#"
                    variant="body2"
                    underline="none"
                    sx={{ color: "#ee6535", fontSize: 13 }}
                  >
                    {"Sign Up"}
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
      </Grid>
    </ThemeProvider>
  );
}
