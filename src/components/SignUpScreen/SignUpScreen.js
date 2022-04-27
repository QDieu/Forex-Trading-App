import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { fontSize } from "@mui/system";
import "./style.css";
import orange from "../../assets/Icons/orange.png";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const theme = createTheme();

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

  return (
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
                <span style={{ marginRight: 10 }}>
                  <img src={orange} width="25px" height="25px" />{" "}
                </span>
                <h2> Traider</h2>
              </Grid>
              <h1>Create an account</h1>
              <p style={{ marginBottom: 20 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit, iusto mollitia a consequuntur, incidunt totam obcaecati
                repellendus unde quidem
              </p>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid>
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
                <Grid>
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
                </Grid>
              </Grid>

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
                inputProps={{ style: { color: "#737374", fontSize: 13 } }}
                className="inputField"
                margin="normal"
                placeholder="Re-enter password"
                required
                fullWidth
                size="small"
                name="ConfirmPassword"
                type="password"
                id="ConfirmPassword"
                // autoComplete="current-password"
              />
              <Grid
                container
                direction="row"
                //   justifyContent="center"
                alignItems="center"
              >
                <Checkbox {...label} />
                <p style={{ color: "rgb(209, 209, 209)" }}>
                  I agree all the statements included in&nbsp;
                </p>
                <p style={{ color: "#ee6535" }}>Terms of Use &nbsp;</p>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#ee6535" }}
              >
                Continue
              </Button>
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
  );
}
