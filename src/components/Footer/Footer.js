import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "./style.css";
import Grid from "@mui/material/Grid";

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 15,
          mt: "auto",
          backgroundColor: "#2b2b2c",
        }}
      >
        {/* <Container maxWidth="sm"> */}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              md={6}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <p>Copyright &copy; 2022 Traider. All Rights Reserved</p>
            </Grid>
            <Grid
              md={6}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <p>T&C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
              <p>Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p>Help</p>
            </Grid>
          </Grid>
        {/* </Container> */}
      </Box>
    </Box>
  );
}
