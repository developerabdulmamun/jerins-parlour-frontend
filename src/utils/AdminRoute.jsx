"use client";

import { Box, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import useAuth from "./useAuth";
import useAdmin from "./useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const router = useRouter();

  if (loading || isAdminLoading) {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname + window.location.search;
    router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
  }

  return null;
};

export default AdminRoute;
