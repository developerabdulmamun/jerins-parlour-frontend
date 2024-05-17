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
import Drawer from "@mui/material/Drawer";
import useAuth from "@/utils/useAuth";
import {
  ClipboardList,
  LayoutGrid,
  MessagesSquare,
  Plus,
  ShoppingCart,
  UserPlus,
} from "lucide-react";

const drawerWidth = 240;

const userSidebarMenu = [
  {
    icon: <ShoppingCart />,
    pathName: "Book",
    route: "/book",
  },
  {
    icon: <ClipboardList />,
    pathName: "Booking List",
    route: "/bookings",
  },
  {
    icon: <MessagesSquare />,
    pathName: "Review",
    route: "/review",
  },
];

const adminSidebarMenu = [
  {
    icon: <ClipboardList />,
    pathName: "Order List",
    route: "/orders",
  },
  {
    icon: <Plus />,
    pathName: "Add Service",
    route: "/addService",
  },
  {
    icon: <LayoutGrid />,
    pathName: "Manage Services",
    route: "/manageServices",
  },
  {
    icon: <UserPlus />,
    pathName: "Make Admin",
    route: "/makeAdmin",
  },
];

const Sidebar = () => {
  const { user } = useAuth();
  const isAdmin = true;
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarMenu = isAdmin ? adminSidebarMenu : userSidebarMenu;
  const [selectedMenu, setSelectedMenu] = useState(sidebarMenu[0]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
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
            alignItems={"center"}
          >
            <Typography fontWeight={500} fontSize={22}>
              {selectedMenu.pathName}
            </Typography>
            <Typography fontWeight={500}>{user?.displayName}</Typography>
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
            {sidebarMenu.map((menu, index) => (
              <ListItem key={index} disablePadding>
                <Link href={menu.route} className="w-full">
                  <ListItemButton
                    onClick={() => handleMenuClick(menu)}
                    sx={{
                      color:
                        selectedMenu.pathName === menu.pathName
                          ? "#F63E7B"
                          : "#878787",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color:
                          selectedMenu.pathName === menu.pathName
                            ? "#F63E7B"
                            : "#878787",
                      }}
                    >
                      {menu.icon}
                    </ListItemIcon>
                    <ListItemText primary={menu.pathName} />
                  </ListItemButton>
                </Link>
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
          {sidebarMenu.map((menu, index) => (
            <ListItem key={index} disablePadding>
              <Link href={menu.route} className="w-full">
                <ListItemButton
                  onClick={() => handleMenuClick(menu)}
                  sx={{
                    color:
                      selectedMenu.pathName === menu.pathName
                        ? "#F63E7B"
                        : "#878787",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        selectedMenu.pathName === menu.pathName
                          ? "#F63E7B"
                          : "#878787",
                    }}
                  >
                    {menu.icon}
                  </ListItemIcon>
                  <ListItemText primary={menu.pathName} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
