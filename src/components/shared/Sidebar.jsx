"use client";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Box, Toolbar } from "@mui/material";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Drawer from "@mui/material/Drawer";
import useAuth from "@/utils/useAuth";

const drawerWidth = 240;

const Sidebar = () => {
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "white",
          boxShadow: "none",
          py: 2,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display={"flex"} alignItems={"center"}>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href={"/"} className="w-32">
              <Image src={logo} alt="logo image" width={128} height={48} />
            </Link>
          </Box>
          <Box
            width={{ xs: "45%", sm: "64%", md: "86%" }}
            color={"black"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Typography>Book</Typography>
            <Typography>{user?.displayName}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
          },
          display: { xs: "none", sm: "block" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }} mt={5}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": { width: drawerWidth },
          display: { xs: "block", sm: "none" },
        }}
      >
        <Toolbar />
        <List sx={{ mt: 5 }}>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
