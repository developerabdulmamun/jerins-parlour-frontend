"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { Poppins } from "next/font/google";
import "../globals.css";
import Provider from "../_provider";
import AuthProvider from "@/providers/AuthProvider";
import Sidebar from "@/components/shared/Sidebar";
import PrivateRoute from "@/utils/PrivateRoute";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          <AuthProvider>
            <PrivateRoute>
              <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Sidebar />

                <Box
                  component="main"
                  sx={{ flexGrow: 1, px: 5, py: 8, minHeight: "100vh" }}
                  bgcolor={"#F4F7FC"}
                >
                  <Toolbar />
                  {children}
                </Box>
              </Box>
            </PrivateRoute>
          </AuthProvider>
        </Provider>
      </body>
    </html>
  );
}
