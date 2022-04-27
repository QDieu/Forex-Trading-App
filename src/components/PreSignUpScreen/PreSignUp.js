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
import { border, fontSize } from "@mui/system";
import "./style.css";
import facebook from "../../assets/Icons/facebook.png";
import google from "../../assets/Icons/google.png";
import linkedin from "../../assets/Icons/linkedin.png";
import orange from "../../assets/Icons/orange.png";
import warning from "../../assets/Icons/warning1.png";

// const theme = createTheme();

export default function PreSignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
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
              <h1>Start inventing with UK's largest brokerages</h1>
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
                  md={2}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    src={warning}
                    width="20px"
                    height="20px"
                    
                  />
                </Grid>
                <Grid
                  md={10}
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{
                    pr: 5,
                  }}
                >
                  <p style={{}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Imped itdolor sit amet consectetur. Impedit,
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
                  style: { color: "#737374", fontSize: 13 },
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#ee6535" }}
              >
                Continue
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
                Already have an account? &nbsp;
              </p>

              <Link
                href="#"
                variant="body2"
                href="#"
                variant="body2"
                underline="none"
                sx={{ color: "#ee6535", fontSize: 13 }}
              >
                {"Sign In"}
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
  );
}
