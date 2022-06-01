import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./style.css";
import facebook from "../../assets/Icons/facebook.png";
import google from "../../assets/Icons/google.png";
import linkedin from "../../assets/Icons/linkedin.png";
import orange from "../../assets/Icons/orange.png";
import warning from "../../assets/Icons/warning1.png";
import MainScreen from "../MainScreen/MainScreen";

export default function PreSignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <MainScreen>
      <Grid
        className="leftSide"
        xs={11}
        sm={9}
        md={6}
        lg={5.5}
        sx={{ padding: 5, paddingRight: { lg: 15, md: 0, sm: 0 } }}
        square
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin="auto"
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
                sx={{ mt: 1 }}
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
                <h1>
                  <Grid sx={{ fontSize: { xs: 20, sm: 20, md: 25, lg: 30 } }}>
                    Start investing with UK's largest brokerages
                  </Grid>
                </h1>
                <p style={{ marginBottom: 20 }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit,
                </p>

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ border: 0.5, borderColor: "#8c2522", marginBottom: 3 }}
                >
                  <Grid
                    md={1}
                    xs={1}
                    sm={1}
                    lg={1}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                      marginLeft: 1,
                    }}
                  >
                    <img src={warning} width="20px" height="20px" />
                  </Grid>
                  <Grid
                    md={10}
                    xs={10}
                    sm={10}
                    lg={10}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    sx={{
                      marginLeft: 1,
                      pr: 5,
                    }}
                  >
                    <p style={{}}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Imped itdolor sit amet consecte adipisicing elit.
                    </p>
                  </Grid>
                </Grid>

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
                <Link
                  to="/verifyEmailOTP"
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  <Button
                    className="btnclick"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      height: 45,
                      fontSize: 12,
                      mt: 1,
                      mb: 2,
                      backgroundColor: "#ee6535",
                      textTransform: "capitalize",
                    }}
                  >
                    Continue
                  </Button>
                </Link>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <p>Or continue with this social profile</p>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                  <Button>
                    <span className="icon">
                      <img src={google} width="30px" height="30px" />
                    </span>
                  </Button>
                  <Button>
                    <span className="icon">
                      <img src={facebook} width="30px" height="30px" />
                    </span>
                  </Button>
                  <Button>
                    <span className="icon">
                      <img src={linkedin} width="30px" height="30px" />{" "}
                    </span>
                  </Button>
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
                  Already have an account? &nbsp;
                </p>

                <Link
                  to="/"
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  Sign In
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
