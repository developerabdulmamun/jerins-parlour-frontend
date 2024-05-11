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
import { MenuIcon, User } from "lucide-react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

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
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const user = null;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeLink, setActiveLink] = React.useState("/");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavClick = (route) => {
    setActiveLink(route);
    handleCloseNavMenu();
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
                  <Typography textAlign="center">{page.pathName}</Typography>
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
            <Tooltip title="Open settings">
              {user ? (
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0.5, bgcolor: "#F63E7B", color: "white", ml: 2 }}
                >
                  <User />
                </IconButton>
              ) : (
                <CustomButton sx={{ ml: 2 }}>Login</CustomButton>
              )}
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
