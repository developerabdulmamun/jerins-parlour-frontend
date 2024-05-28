"use client";

import React from "react";
import useAuth from "./useAuth";
import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

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

  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname + window.location.search;
    router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
  }

  return null;
  // return redirect("/login");
};

export default PrivateRoute;
