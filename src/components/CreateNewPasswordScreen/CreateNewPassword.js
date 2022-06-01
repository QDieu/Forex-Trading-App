import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./style.css";
import orange from "../../assets/Icons/orange.png";
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen/MainScreen";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CreateNewPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get("password"),
      confirmPassword: data.get("ConfirmPassword"),
    });
  };

  return (
    <MainScreen>
      <Grid
        className="leftSide"
        item
        xs={12}
        sm={12}
        md={6}
        lg={5.5}
        sx={{ padding: 5, paddingRight: { lg: 15, md: 0, sm: 0 } }}
        square
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
            sx={{ height: "88vh" }}
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
                <h1>Create new password</h1>
                <p style={{ marginBottom: 20 }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit, iusto mollitia a consequuntur, incidunt totam
                  obcaecati repellendus unde quidem
                </p>

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
                />
                <Link
                  to={"/"}
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
                    sx={{ mt: 3, mb: 2, backgroundColor: "#ee6535" }}
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
