"use client";

import React from "react";
import useAuth from "./useAuth";
import { Box, CircularProgress } from "@mui/material";
import { redirect } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (user) {
    return children;
  }

  return redirect("/login");
};

export default PrivateRoute;
