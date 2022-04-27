import * as React from "react";

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

export default function Credit() {
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
      <Grid sx={{ backgroundColor: "#0f0f11" }}>
            <Box
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
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <Grid>
                  <h3>Credit or Debit Card</h3>
                  <hr
                    style={{
                      border: "1px solid rgb(41, 40, 40)",
                    }}
                  />
                  <Grid
                    px={3}
                    pb={3}
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid md={5}>
                      <Grid>
                        <h5>First name</h5>
                      </Grid>
                      <TextField
                        // xl={10}
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
                          style: { color: "#737374", fontSize: 13 },
                        }}
                        className="inputField"
                        margin="normal"
                        placeholder="Enter first name"
                        required
                        // fullWidth
                        id="firstName"
                        size="small"
                        name="firstName"
                        // autoComplete="email"
                      />
                    </Grid>
                    <Grid md={5}>
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
                          style: { color: "#737374", fontSize: 13 },
                        }}
                        className="inputField"
                        margin="normal"
                        placeholder="Enter last name"
                        required
                        // fullWidth
                        id="lastName"
                        size="small"
                        name="lastName"
                        // autoComplete="email"
                      />
                    </Grid>{" "}
                    <Grid>
                      <h5>Password</h5>
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
                        style: { color: "#737374", fontSize: 13 },
                      }}
                      className="inputField"
                      margin="normal"
                      placeholder="Create password"
                      required
                      fullWidth
                      id="password"
                      type="password"
                      size="small"
                      name="password"
                      // autoComplete="email"
                    />
                    <Grid md={5}>
                      <Grid>
                        <h5>Expiration Date</h5>
                      </Grid>
                      <TextField
                        // xl={10}
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
                          style: { color: "#737374", fontSize: 13 },
                        }}
                        className="inputField"
                        margin="normal"
                        placeholder="MM  /  YYYY"
                        required
                        // fullWidth
                        id="firstName"
                        size="small"
                        name="firstName"
                        // autoComplete="email"
                      />
                    </Grid>
                    <Grid md={5}>
                      <Grid>
                        <h5>CVV</h5>
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
                          style: { color: "#737374", fontSize: 13 },
                        }}
                        className="inputField"
                        margin="normal"
                        placeholder="xxx"
                        required
                        // fullWidth
                        id="lastName"
                        size="small"
                        name="lastName"
                        // autoComplete="email"
                      />
                    </Grid>{" "}
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box
              px={3}
              sx={{
                marginTop: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#141415",
                borderRadius: 3,
                border: "1px solid rgb(41, 41, 41)",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="baseline"
                  >
                    <h4>$50</h4>
                    <p style={{ margin: 0 }}>/mo</p>
                  </Grid>
                  <Grid>
                    <p style={{ margin: 0 }}>Plus Plan</p>
                  </Grid>
                </Grid>
                <Grid>
                  <p
                    style={{
                      border: "1px solid rgb(41, 40, 40)",
                      padding: "8px 16px",
                      borderRadius: 5,
                    }}
                  >
                    Change
                  </p>
                </Grid>
              </Grid>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#ee6535" }}
            >
              Start Membership
            </Button>
      </Grid>
    </React.Fragment>
  );
}

// export default function Pricing() {
//   return <PricingContent />;
// }
