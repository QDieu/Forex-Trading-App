import * as React from "react";
import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./style.css";
import Modal from "@mui/material/Modal";
import MainPricingDashboard from "../MainPricingDashboard/MainPricingDashboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  boxShadow: 24,
  p: 4,
};

export default function SelectBroker() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDone(true);
  };

  const [done, setDone] = useState(false);

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
      <MainPricingDashboard>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Grid
              sx={{ backgroundColor: "#0f0f11", padding: 2, borderRadius: 2 }}
            >
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
                  <Grid px={3} pb={3}>
                    <h2>Connect with Oanda</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente atque, iure
                    </p>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid>
                        <h5>API key</h5>
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
                        placeholder="Enter API key"
                        required
                        fullWidth
                        id="api"
                        type="text"
                        size="small"
                        name="api"
                      />
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
                          style: { height: 25, color: "#cfcfd1", fontSize: 12 },
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
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>

              <Button
                onClick={handleClose}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#ee6535" }}
              >
                Done
              </Button>
            </Grid>
          </Box>
        </Modal>

        <Grid sx={{ backgroundColor: "#0f0f11" }}>
          <Container
            maxWidth="lg"
            component="main"
            sx={{ backgroundColor: "none", height: "100vh" }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <h1>Select your broker</h1>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <p>Your membership starts as soon as you set up payment. </p>
            </Grid>

            <Container component="main" maxWidth="sm">
              <Grid sx={{ backgroundColor: "#0f0f11" }}>
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
                    <Grid item xs={5} sm={5} md={5} m={1}>
                      <p
                        style={{
                          border: "1px solid rgb(41, 40, 40)",
                          padding: "0px 0px",
                          borderRadius: 5,
                          backgroundColor: done ? "#ee6535" : null,
                        }}
                      >
                        <Grid
                          marginTop={-2}
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ cursor: "pointer" }}
                        >
                          <h1 onClick={handleOpen}>Oanda</h1>
                        </Grid>
                        <hr
                          style={{
                            height: 0.1,
                            borderColor: "rgb(41, 41, 41)",
                          }}
                        />
                        <Grid
                          container
                          p={1}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          color="white"
                        >
                          Oanda
                        </Grid>
                      </p>
                    </Grid>
                    <Grid xs={5} sm={5} md={5} m={1}>
                      <p
                        style={{
                          border: "1px solid rgb(41, 40, 40)",
                          padding: "0px 0px",
                          borderRadius: 5,
                        }}
                      >
                        <Grid
                          marginTop={-2}
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ cursor: "pointer" }}
                        >
                          <h1>IG</h1>
                        </Grid>
                        <hr
                          style={{
                            height: 0.1,
                            borderColor: "rgb(41, 41, 41)",
                          }}
                        />
                        <Grid
                          container
                          p={1}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          color="white"
                        >
                          IG
                        </Grid>
                      </p>
                    </Grid>
                  </Grid>
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
                      <p style={{ margin: 0, color: "white" }}>
                        How does this work?
                      </p>
                    </Grid>
                    <Grid>
                      <p
                        style={{
                          border: "1px solid rgb(41, 40, 40)",
                          padding: "8px 16px",
                          borderRadius: 5,
                          color: "white",
                        }}
                      >
                        Know more
                      </p>
                    </Grid>
                  </Grid>
                </Box>
                {done ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#ee6535",
                      textTransform: "capitalize",
                    }}
                  >
                    Let's Get Started
                  </Button>
                ) : null}
              </Grid>
            </Container>
          </Container>
        </Grid>
      </MainPricingDashboard>
    </React.Fragment>
  );
}
