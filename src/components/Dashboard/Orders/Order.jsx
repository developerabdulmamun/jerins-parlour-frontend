"use client";

import useAxiosSecure from "@/utils/useAxiosSecure";
import {
  Box,
  ButtonGroup,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

const Orders = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: bookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });

  const handleStatusChange = async (id, status) => {
    await axiosSecure.put(`/bookings/${id}`, { status });
    queryClient.invalidateQueries(["bookings"]);
  };

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
                  <TableCell sx={{ textAlign: "center" }}>
                    <Select
                      value={booking.status}
                      onChange={(e) =>
                        handleStatusChange(booking._id, e.target.value)
                      }
                      sx={{
                        border: "none",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: 0,
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          border: 0,
                        },
                        "&.MuiSelect-select": {
                          padding: 0,
                        },
                      }}
                      renderValue={(value) => (
                        <Typography
                          sx={{
                            color:
                              value === "Pending"
                                ? "#FF4545"
                                : value === "Ongoing"
                                ? "#FFBD3E"
                                : "#009444",
                            fontWeight: "bold",
                          }}
                        >
                          {value}
                        </Typography>
                      )}
                    >
                      <MenuItem value="Pending">
                        <Typography sx={{ color: "#FF4545" }}>
                          Pending
                        </Typography>
                      </MenuItem>
                      <MenuItem value="Ongoing">
                        <Typography sx={{ color: "#FFBD3E" }}>
                          Ongoing
                        </Typography>
                      </MenuItem>
                      <MenuItem value="Done">
                        <Typography sx={{ color: "#009444" }}>Done</Typography>
                      </MenuItem>
                    </Select>
                  </TableCell>
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
