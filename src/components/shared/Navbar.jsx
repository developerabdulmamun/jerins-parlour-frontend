"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import useAuth from "@/utils/useAuth";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MailIcon from "@mui/icons-material/Mail";

const pages = [
  {
    pathName: "Home",
    route: "/",
  },
  {
    pathName: "Services",
    route: "/services",
  },
  {
    pathName: "About Us",
    route: "/about",
  },
  {
    pathName: "Contact Us",
    route: "/contact",
  },
];

const Navbar = () => {
  const { user, logOut } = useAuth();
  const isAdmin = false;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activeLink, setActiveLink] = React.useState("/");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (route) => {
    setActiveLink(route);
    handleCloseNavMenu();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    handleClose();

    logOut().then(() => {});
  };

  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "#FFF8F5", boxShadow: "none", pt: "30px" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
            }}
          >
            <Image src={logo} alt="logo" width={128} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.pathName}
                  href={page.route}
                  onClick={handleCloseNavMenu}
                >
                  <Link href={page.route}>{page.pathName}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Image src={logo} alt="logo" width={128} />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.pathName}
                onClick={() => handleNavClick(page.route)}
                sx={{
                  my: 2,
                  mr: 2,
                  color: "#474747",
                  fontWeight: page.route === activeLink ? "600" : "400",
                  display: "block",
                  textTransform: "capitalize",
                }}
              >
                <Link href={page.route}>{page.pathName}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              {user ? (
                <IconButton
                  onClick={handleClick}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <AccountCircleIcon
                    fontSize="large"
                    sx={{ color: "#F63E7B" }}
                  />
                </IconButton>
              ) : (
                <Link href={"/login"}>
                  <CustomButton sx={{ ml: 2 }}>Login</CustomButton>
                </Link>
              )}
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <MailIcon fontSize="small" sx={{ color: "#F63E7B" }} />
                </ListItemIcon>
                {user?.email}
              </MenuItem>
              <Link href={isAdmin ? "/orders" : "/book"}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <DashboardIcon fontSize="small" sx={{ color: "#F63E7B" }} />
                  </ListItemIcon>
                  Dashboard
                </MenuItem>
              </Link>
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <Logout fontSize="small" sx={{ color: "#F63E7B" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
