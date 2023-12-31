import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Divider, Drawer } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import BookIcon from "@mui/icons-material/Book";
import colors from "../../../theme/base/colors";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";

const pages = ["Products", "Pricing", "Blog"];

const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <Box
        display={"flex"}
        alignItems={"center"}
        padding={"14px"}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate("/elder-buddy/health-records")}
      >
        <FolderIcon sx={{ color: colors.primary.main }} />
        <Typography variant="h6" color="#000" marginLeft={"10px"}>
          My Documents
        </Typography>
      </Box>
      <Divider />
      <Box
        display={"flex"}
        alignItems={"center"}
        padding={"14px"}
        onClick={() => {
          navigate("/elder-buddy/my-bookings");
        }}
      >
        <BookIcon sx={{ color: colors.primary.main }} />
        <Typography variant="h6" color="#000" marginLeft={"10px"}>
          My Bookings
        </Typography>
      </Box>
      <Divider />
      <Box display={"flex"} alignItems={"center"} padding={"14px"}>
        <BookIcon sx={{ color: colors.primary.main }} />
        <Typography variant="h6" color="#000" marginLeft={"10px"}>
          Contact Us
        </Typography>
      </Box>
      <Divider />
      <Divider />
      <Box display={"flex"} alignItems={"center"} padding={"14px"}>
        <Logout sx={{ color: colors.primary.main }} />
        <Typography variant="h6" color="#000" marginLeft={"10px"}>
          Logout
        </Typography>
      </Box>
      <Divider />
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        backgroundColor: "#fff",
        boxShadow: "0px 3px 6px rgb(119 143 157 / 26%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#000",
              textDecoration: "none",
            }}
          >
            {/* ELDER EASE */}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/user.png" />
              </IconButton>
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
              <MenuItem
                onClick={() => {
                  navigate("/elder-buddy/profile");
                }}
              >
                <Typography textAlign="center" fontSize={"16px"}>
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" fontSize={"16px"}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor={"left"}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {list()}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
