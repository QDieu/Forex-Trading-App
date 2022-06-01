import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./style.css";
import orange from "../../assets/Icons/orange.png";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen/MainScreen";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      password: data.get("password"),
      confirmPassword: data.get("ConfirmPassword"),
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [showPasswor, setShowPasswor] = useState(false);
  const handleClickShowPasswor = () => setShowPasswor(!showPasswor);
  const handleMouseDownPasswor = () => setShowPasswor(!showPasswor);

  return (
    <MainScreen>
      <Grid
        item
        className="leftSide"
        xs={11}
        sm={9}
        md={6}
        lg={5.5}
        sx={{ padding: 5, paddingRight: { lg: 15, md: 0, sm: 0 } }}
        square
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
                <h1>Create an account</h1>
                <p style={{ marginBottom: 20 }}>
                  Stocks, Forex, Indices, Bonds, Equities
                </p>
                <Grid
                  container
                  spacing={1}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs={5.8}>
                    <Grid>
                      <h5>First name</h5>
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
                      placeholder="Enter first name"
                      required
                      fullWidth
                      id="firstName"
                      size="small"
                      name="firstName"
                    />
                  </Grid>
                  <Grid item xs={5.8}>
                    <Grid>
                      <h5>Last name</h5>
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
                      placeholder="Enter last name"
                      required
                      fullWidth
                      id="lastName"
                      size="small"
                      name="lastName"
                    />
                  </Grid>
                </Grid>

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
                  //type="password"
                  id="password"
                  autoComplete="current-password"
                  type={showPassword ? "text" : "password"} // <-- This is where the magic happens
                  //onChange={someChangeHandler}
                  InputProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <Visibility className="visiblePassword" />
                          ) : (
                            <VisibilityOff className="visiblePassword" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Grid>
                  <h5>Confirm password</h5>
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
                  placeholder="Re-enter password"
                  required
                  fullWidth
                  size="small"
                  name="confirmpassword"
                  //type="password"
                  id="confirmpassword"
                  autoComplete="current-password"
                  type={showPasswor ? "text" : "password"} // <-- This is where the magic happens
                  //onChange={someChangeHandler}
                  InputProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswor}
                          onMouseDown={handleMouseDownPasswor}
                        >
                          {showPasswor ? (
                            <Visibility className="visiblePassword" />
                          ) : (
                            <VisibilityOff className="visiblePassword" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Grid container direction="row" alignItems="center">
                  <Checkbox className="checktheBox" {...label} />
                  <p style={{ color: "rgb(209, 209, 209)" }}>
                    I agree all the statements included in&nbsp;
                  </p>

                  <p style={{ color: "#ee6535" }}>Terms of Use &nbsp;</p>
                </Grid>
                <Link
                  to={"/verifyPhoneNumber"}
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      height: 45,
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#ee6535",
                      textTransform: "capitalize",
                    }}
                  >
                    Continue
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid>
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
