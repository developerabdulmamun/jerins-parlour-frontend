import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ title }) => {
  return (
    <Box
      sx={{
        height: "300px",
        bgcolor: "#F63E7B",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h3">{title}</Typography>
        <Breadcrumbs sx={{ color: "white", display: "flex", justifyContent: "center", mt: 2 }}>
          <Link underline="hover" href="/" color={"white"}>
            Home
          </Link>
          <Typography>{title}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default PageHeader;
