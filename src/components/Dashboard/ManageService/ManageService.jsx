"use client";

import useAxiosSecure from "@/utils/useAxiosSecure";
import useGetAllServices from "@/utils/useGetAllServices";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  Box,
  ButtonGroup,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import EditServiceDialog from "./EditServiceDialog";

const ManageService = () => {
  const { services, refetch } = useGetAllServices();
  const axiosSecure = useAxiosSecure();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [formValues, setFormValues] = useState({
    heading: "",
    description: "",
    price: "",
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEditClick = (service) => {
    setCurrentService(service);
    setFormValues({
      heading: service.heading,
      description: service.description,
      price: service.price,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentService(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSave = async () => {
    const res = await axiosSecure.put(
      `/services/${currentService._id}`,
      formValues
    );
    if (res.status === 200) {
      refetch();
      handleClose();
      Swal.fire({
        icon: "success",
        title: "Service details update successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.error("Failed t update service");
    }
  };

  const handleServiceDelete = (service) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/services/${service._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${service.heading} has been deleted`,
            icon: "success",
          });
        }
      }
    });
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
                <TableCell sx={{ fontWeight: "bold" }}>Description</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Action
                </TableCell>
              </TableRow>
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
                    <TableCell>
                      <ButtonGroup disableElevation>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => handleEditClick(service)}>
                            <EditNoteIcon color="success" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => handleServiceDelete(service)}
                          >
                            <DeleteIcon color="error" />
                          </IconButton>
                        </Tooltip>
                      </ButtonGroup>
                    </TableCell>
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

      <EditServiceDialog
        open={open}
        handleClose={handleClose}
        formValues={formValues}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
      />
    </>
  );
};

export default ManageService;
