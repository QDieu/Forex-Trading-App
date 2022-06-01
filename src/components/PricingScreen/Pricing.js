import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import MainPricingDashboard from "../MainPricingDashboard/MainPricingDashboard";
import { Link } from "react-router-dom";

import "./style.css";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    btn: "Try For Free",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "10 GB of storage",
      "Help center access",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
    btn: "Get Started Now",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
    btn: "Get Pro Plan",
  },
];

export default function Pricing() {
  return (
    <MainPricingDashboard>
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
            <h1>Choose your plan</h1>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <CheckBoxIcon
              defaultChecked
              size="small"
              style={{
                color: "#ee6535",
                transform: "scale(0.7)",
              }}
            />
            <p>No commitments, cancel any time. </p>
            <CheckBoxIcon
              defaultChecked
              size="small"
              style={{
                color: "#ee6535",
                transform: "scale(0.7)",
              }}
            />
            <p>No charges or extra fees. Ever. </p>
            <CheckBoxIcon
              defaultChecked
              size="small"
              style={{
                color: "#ee6535",
                transform: "scale(0.7)",
              }}
            />
            <p>Switch plans or cancel any time. </p>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <h3>Monthly</h3>
            <Switch defaultChecked />
            <h3>Anually</h3>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card sx={{ backgroundColor: "#141415", mt: 5 }}>
                  {tier.subheader === "Most popular" ? (
                    <CardHeader
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: "center" }}
                      subheaderTypographyProps={{
                        align: "center",
                        color: "white",
                      }}
                      sx={{
                        backgroundColor:
                          tier.subheader === "Most popular" ? "#ee6535" : null,
                      }}
                    />
                  ) : null}

                  <CardContent
                    sx={{
                      border: "2px solid #ee6535",
                      minHeight: 450,
                      backgroundColor:
                        tier.subheader === "Most popular" ? "#181212" : null,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",

                        alignItems: "baseline",
                        mb: 2,
                        pl: 2,
                        pr: 2,
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {" "}
                        <Grid item xs={6} md={6}>
                          <h2>{tier.title}</h2>
                          <p style={{ marginTop: 0 }}>
                            Free to use for 14 days
                          </p>
                        </Grid>
                        <Grid
                          xs={6}
                          md={6}
                          container
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="baseline"
                        >
                          <h1 className="head">${tier.price}</h1>
                          <p>/mo</p>
                        </Grid>
                        <Link
                          to={"/setupPayment"}
                          style={{
                            width: "100%",
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <Button
                            type="submit"
                            fullWidth
                            variant={tier.buttonVariant}
                            sx={{
                              mt: 1,
                              mb: 2,
                              fontSize: 12,
                            }}
                          >
                            {tier.btn}
                          </Button>
                        </Link>
                      </Grid>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          key={line}
                          sx={{
                            fontSize: 12,
                            color: "#dadada",
                            lineHeight: 0.5,
                          }}
                        >
                          <Checkbox
                            defaultChecked
                            style={{
                              transform: "scale(0.7)",
                            }}
                          />
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </MainPricingDashboard>
  );
}
