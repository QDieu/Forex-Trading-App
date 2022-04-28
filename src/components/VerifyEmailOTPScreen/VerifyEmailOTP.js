import * as React from "react";
import { useState } from "react";
// import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./style.css";
import orange from "../../assets/Icons/orange.png";
import edit from "../../assets/Icons/write.png";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen/MainScreen";

// const theme = createTheme();

export default function VerifyEmailOTP() {
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => setOtp(otp);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      otp: otp,
    });
  };

  return (
    <MainScreen>
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
                <h1>Verify OTP</h1>
                <p style={{ marginBottom: 20 }}>
                  Enter the OTP sent to this email address
                  <Grid
                    container
                    direction="row"
                    // justifyContent="center"
                    alignItems="center"
                  >
                    <p style={{ color: "#ee6535", margin: 0 }}>
                      sumairzahid123@gmail.com &nbsp;
                    </p>
                    <Link to={"/preSignUp"}>
                      {" "}
                      <span>
                        <img src={edit} width="12px" height="12px" />{" "}
                      </span>
                    </Link>
                  </Grid>
                </p>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  {" "}
                  <p
                    style={{
                      color: "rgb(196, 194, 194)",
                      fontSize: "12px",
                      marginBottom: 5,
                    }}
                  >
                    Verify OTP
                  </p>
                  <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={6}
                    color="white"
                    separator={
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    }
                    inputStyle={{
                      // padding: "22px 26px",
                      border: "1px solid rgb(61, 61, 61)",
                      backgroundColor: "#141415",
                      borderRadius: "3px",
                      color: "white",
                      // textColor: "white",
                      fontSize: "55px",
                      outline: "#ee6535",
                    }}
                    focusStyle={{
                      // border: "1px solid rgb(61, 61, 61)",,
                      // border:'none'
                      outline: "#ee6535",
                    }}
                    isInputNum={true}
                  />
                </Grid>
                <Link to={"/signUp"}  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#ee6535" }}
                  >
                    Continue
                  </Button>
                </Link>
              </Box>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p style={{ color: "#ee6535", margin: 0 }}>Resend OTP</p>
              </Grid>
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
