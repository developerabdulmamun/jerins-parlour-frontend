import { Box, Container, Skeleton } from "@mui/material";
import React from "react";

const BannerSkeleton = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF8F5", py: 5 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 5, sm: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", sm: "start" },
            }}
          >
            <Skeleton variant="text" width={300} height={56} />
            <Skeleton variant="text" width={300} height={56} />
            <Skeleton
              variant="text"
              width={"100%"}
              height={30}
              sx={{ mt: { xs: 2, md: 3 }, mb: { xs: 3, md: 5 } }}
            />
          </Box>
          
          <Skeleton variant="rectangular" width={484} height={478} />
        </Box>
      </Container>
    </Box>
  );
};

export default BannerSkeleton;
