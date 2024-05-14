"use client";

import useAuth from "@/utils/useAuth";
import useGetAllServices from "@/utils/useGetAllServices";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Book = () => {
  const { user } = useAuth();
  const services = useGetAllServices();
  const [selectedService, setSelectedService] = useState("");

  const handleChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <Box width={{ xs: "100%", sm: "70%", md: "35%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            defaultValue={user?.displayName}
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
            }}
            InputProps={{ notched: false }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            defaultValue={user?.email}
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
            }}
            InputProps={{ notched: false }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
            }}
          >
            <Select
              value={selectedService}
              onChange={handleChange}
              displayEmpty
              renderValue={(value) => (value ? value : "Select a service")}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                    width: 250,
                  },
                },
              }}
            >
              <MenuItem value="" disabled>
                Select a service
              </MenuItem>
              {services?.map((service) => (
                <MenuItem key={service._id} value={service.heading}>
                  {service.heading}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Book;
