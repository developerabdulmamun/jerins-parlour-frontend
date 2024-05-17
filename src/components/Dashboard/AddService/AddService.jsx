import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { CloudUpload } from "@mui/icons-material";
import CustomButton from "@/components/shared/CustomButton";

const AddService = () => {
  return (
    <Box bgcolor={"white"} borderRadius={"20px"} p={{ xs: 3, sm: 6 }}>
      <Box component={"form"}>
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
                name="service"
                placeholder="Enter the service title"
                fullWidth
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
              <input type="file" hidden />
            </Button>
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
