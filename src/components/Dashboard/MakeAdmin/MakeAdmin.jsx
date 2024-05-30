import CustomButton from "@/components/shared/CustomButton";
import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const MakeAdmin = () => {
  return (
    <>
      <Box bgcolor={"white"} borderRadius={"20px"} p={4}>
        <Typography color={"#232323"} fontWeight={"500"} mb={0.5}>
          Email
        </Typography>
        <Box
          component={"form"}
          display={"flex"}
          alignItems={"center"}
          gap={1}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="youremail@gmail.com"
            variant="outlined"
            size="small"
            sx={{ width: { xs: "100%", md: "50%" } }}
          />

          <CustomButton type="submit">Submit</CustomButton>
        </Box>
      </Box>
    </>
  );
};

export default MakeAdmin;
