"use client";

import useAxiosSecure from "@/utils/useAxiosSecure";
import {
  Box,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Orders = () => {
  const axiosSecure = useAxiosSecure();

  const { data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });

  return (
    <>
      <Box bgcolor={"white"} borderRadius={"20px"} p={3}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ bgcolor: "#f5f5f5", borderRadius: 2 }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Service</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Pay With</TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings?.map((booking, index) => (
                <TableRow key={booking._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{booking.name}</TableCell>
                  <TableCell sx={{ wordBreak: "break-all" }}>
                    {booking.email}
                  </TableCell>
                  <TableCell>{booking.service}</TableCell>
                  <TableCell>{booking.paymentMethod}</TableCell>
                  <TableCell>{booking.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Orders;
