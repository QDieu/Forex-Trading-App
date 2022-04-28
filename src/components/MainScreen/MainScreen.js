import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import SignIn from "../SigninScreen/SignIn";
import SignUp from "../SignUpScreen/SignUpScreen";
import VerifyPhoneNumber from "../VerifyPhoneNumberScreen/VerifyPhoneNumber";
import VerifyPhoneOTP from "../VerifyPhoneOTPScreen/VerifyPhoneOTP";
import VerifyEmailOTP from "../VerifyEmailOTPScreen/VerifyEmailOTP";
import ForgotPassword from "../ForgotPasswordScreen /ForgotPassword";
import ForgotPasswordVerifyOTP from "../ForgotPasswordVerifyOTPScreen/ForgotPasswordVerifyOTP";
import CreateNewPassword from "../CreateNewPasswordScreen/CreateNewPassword";
import PreSignUp from "../PreSignUpScreen/PreSignUp";

export default function MainScreen(props) {
  const [signup, setSignup] = useState(true);
  const [preSignup, setPreSignup] = useState(false);

  console.log("props", props);

  return (
    <Grid
      container
      component="main1"
      sx={{ height: "100vh", backgroundColor: "#0f0f11", color: "white" }}
    >
      <CssBaseline />
      <Grid
        item
        xs={1}
        sm={4}
        md={5.5}
        sx={{
          backgroundImage: "url(/Images/orange.webp)",
          backgroundRepeat: "no-repeat",
          margin: 6,

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
      {props.children}
      {/* SIGNIN SCREEN */}
      {/* <SignIn />
      <PreSignUp /> */}

      {/* <SignUp /> */}
      {/* <VerifyPhoneNumber /> */}
      {/* <VerifyPhoneOTP /> */}
      {/* <VerifyEmailOTP/> */}
      {/* <ForgotPassword/> */}
      {/* <ForgotPasswordVerifyOTP/> */}
      {/* <CreateNewPassword/> */}
    </Grid>
  );
}
