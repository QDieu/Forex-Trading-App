import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./style.css";
import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

export default function ConnectPopup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
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
                        style: { color: "#737374", fontSize: 13 },
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
                  </Grid>
                </Grid>
              </Box>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#ee6535" }}
            >
              Done
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
