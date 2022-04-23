import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./style.css";
import orange from "../../assets/Icons/orange.png";


// const theme = createTheme();

export default function VerifyOTP() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      phoneNumber: data.get("phoneNumber"),
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
              <h1>Verify OTP</h1>
              <p style={{ marginBottom: 20 }}>
                Enter the OTP sent to this number
              </p>

              <Grid>
                <h5>Phone number</h5>
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
                placeholder="10 digit number"
                required
                fullWidth
                id="phoneNumber"
                type="text"
                size="small"
                name="phoneNumber"
                // autoComplete="email"
              />

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
