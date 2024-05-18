"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { CloudUpload } from "@mui/icons-material";
import CustomButton from "@/components/shared/CustomButton";
import useAxiosPublic from "@/utils/useAxiosPublic";
import useAxiosSecure from "@/utils/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddService = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [fileName, setFileName] = useState("");

  const handleAddService = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData();

    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;

    const imageFile = form.image.files[0];
    formData.append("image", imageFile);

    const res = await axiosPublic.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const serviceInfo = {
        icon: res.data.data.display_url,
        heading: title,
        price: parseInt(price),
        description,
      };

      const serviceRes = await axiosSecure.post("/services", serviceInfo);
      if (serviceRes.data.insertedId) {
        form.reset();
        Swal.fire({
          icon: "success",
          title: `${title} is added to your services`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <Box bgcolor={"white"} borderRadius={"20px"} p={{ xs: 3, sm: 6 }}>
      <Box component={"form"} onSubmit={handleAddService}>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={{ xs: 2, md: 5 }}
        >
          <Box
            width={{ xs: "100%", md: "50%" }}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            <Box>
              <Typography color={"#232323"} fontWeight={500} mb={1}>
                Service Title
              </Typography>
              <TextField
                name="title"
                placeholder="Enter the service title"
                fullWidth
                required
              />
            </Box>

            <Box>
              <Typography color={"#232323"} fontWeight={500} mb={1}>
                Service Price
              </Typography>
              <TextField
                name="price"
                placeholder="Enter the service price"
                fullWidth
                required
              />
            </Box>

            <Box>
              <Typography color={"#232323"} fontWeight={500} mb={1}>
                Service Description
              </Typography>
              <TextField
                name="description"
                placeholder="Enter the service description"
                multiline
                rows={6}
                fullWidth
                required
              />
            </Box>
          </Box>

          <Box>
            <Typography color={"#232323"} fontWeight={500} mb={1}>
              Service Image
            </Typography>
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUpload />}
              sx={{
                backgroundColor: "rgba(255, 0, 102, 0.1)",
                color: "#ff0066",
                border: "1px solid #ff0066",
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 0, 102, 0.2)",
                },
                width: "173px",
                height: "40px",
              }}
            >
              Upload Image
              <input
                type="file"
                name="image"
                hidden
                onChange={handleFileChange}
                required
              />
            </Button>
            {fileName && (
              <Typography
                variant="body2"
                sx={{ display: "inline-block", ml: 2 }}
              >
                {fileName}
              </Typography>
            )}
          </Box>
        </Box>

        <CustomButton type="submit" sx={{ width: "200px", mt: 3 }}>
          Submit
        </CustomButton>
      </Box>
    </Box>
  );
};

export default AddService;
