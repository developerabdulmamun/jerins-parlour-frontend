"use client";

import useGetAllServices from "@/utils/useGetAllServices";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

const ManageService = () => {
  const services = useGetAllServices();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Box bgcolor={"white"} borderRadius={"20px"} p={3}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: "#f5f5f5", borderRadius: 2 }}>
              <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableHead>
            <TableBody>
              {services
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((service, index) => (
                  <TableRow key={service._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{service.heading}</TableCell>
                    <TableCell>{service.description}</TableCell>
                    <TableCell>${service.price}</TableCell>
                    <TableCell>Active/Stock Out</TableCell>
                    <TableCell>Edit/Delete</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component={"div"}
            count={services?.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>
    </>
  );
};

export default ManageService;
