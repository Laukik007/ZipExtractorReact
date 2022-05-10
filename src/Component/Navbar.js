import * as React from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import { Divider } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import ConstructionIcon from "@mui/icons-material/Construction";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const videomenu = [
    "Trim Video",
    "Merge Videos",
    "Add Audio to Video",
    "Add Image",
    "Add Text",
    "Remove Logo",
    "Crop",
    "Rotate",
    "Flip video",
    "Resize Video",
    "Loop Video",
    "Change Volume",
    "Change Speed",
    "Stabilize",
    "Video Recorder",
  ];
  const audiomenu = [
    "Trim Audio",
    "Change Volume",
    "Change Speed",
    "Change Pitch",
    "Equalizer",
    "Reverse Audio     Voice Recorder",
    "Audio Joiner",
  ];

  const pdfmenu = [
    "Convert from PDF",
    "Convert to PDF",
    "Split",
    "Merge",
    "Compress",
    "Unlock",
    "Protect",
    "Rotate",
    "Add Page Numbers",
  ];

  const convertersmenu = [
    "Audio Converter",
    "Video Converter",
    "Image Converter",
    "Document Converter",
    "Font Converter",
    "Archive Converter",
    "Ebook Converter",
  ];

  const utilitiesmenu = ["Archive Extractor"];
  const pages = [1];
  const settings = [2];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(0);
  const handleClick = (event, idx) => {
    setOpen(idx);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(0);
    setAnchorEl(null);
  };
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

  return (
    <AppBar position="static" style={{ backgroundColor: "rgb(0, 0, 0)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ my: 2, color: "black", textTransform: "none" }}
                  // onClick={(e) => handleClick(e, 1)}
                  startIcon={<OndemandVideoIcon />}
                >
                  Video Tools
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ my: 2, color: "black", textTransform: "none" }}
                  // onClick={(e) => handleClick(e, 2)}
                  startIcon={<GraphicEqIcon />}
                >
                  Audio Tools
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ my: 2, color: "black", textTransform: "none" }}
                  // onClick={(e) => handleClick(e, 3)}
                  startIcon={<PictureAsPdfIcon />}
                >
                  PDF Tools
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ my: 2, color: "black", textTransform: "none" }}
                  // onClick={(e) => handleClick(e, 4)}
                  startIcon={<ChangeCircleIcon />}
                >
                  Converters
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ my: 2, color: "black", textTransform: "none" }}
                  // onClick={(e) => handleClick(e, 5)}
                  startIcon={<ConstructionIcon />}
                >
                  Utilities
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div>
              <Button
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ my: 2, color: "white", textTransform: "none" }}
                onClick={(e) => handleClick(e, 1)}
                startIcon={<OndemandVideoIcon />}
              >
                Video Tools
              </Button>
              <Button
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ my: 2, color: "white", textTransform: "none" }}
                onClick={(e) => handleClick(e, 2)}
                startIcon={<GraphicEqIcon />}
              >
                Audio Tools
              </Button>
              <Button
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ my: 2, color: "white", textTransform: "none" }}
                onClick={(e) => handleClick(e, 3)}
                startIcon={<PictureAsPdfIcon />}
              >
                PDF Tools
              </Button>
              <Button
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ my: 2, color: "white", textTransform: "none" }}
                onClick={(e) => handleClick(e, 4)}
                startIcon={<ChangeCircleIcon />}
              >
                Converters
              </Button>
              <Button
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ my: 2, color: "white", textTransform: "none" }}
                onClick={(e) => handleClick(e, 5)}
                startIcon={<ConstructionIcon />}
              >
                Utilities
              </Button>
              <StyledMenu
                //  onMouseOut={handleClose}
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {open == 1
                  ? videomenu.map((video, idx) => (
                      <MenuItem key={idx} onClick={handleClose} disableRipple>
                        {/* <EditIcon /> */}
                        {video}
                      </MenuItem>
                    ))
                  : open == 2
                  ? audiomenu.map((video, idx) => (
                      <MenuItem key={idx} onClick={handleClose} disableRipple>
                        {/* <EditIcon /> */}
                        {video}
                      </MenuItem>
                    ))
                  : open == 3
                  ? pdfmenu.map((video, idx) => (
                      <MenuItem key={idx} onClick={handleClose} disableRipple>
                        {/* <EditIcon /> */}
                        {video}
                      </MenuItem>
                    ))
                  : open == 4
                  ? convertersmenu.map((video, idx) => (
                      <MenuItem key={idx} onClick={handleClose} disableRipple>
                        {/* <EditIcon /> */}
                        {video}
                      </MenuItem>
                    ))
                  : utilitiesmenu.map((video, idx) => (
                      <MenuItem key={idx} onClick={handleClose} disableRipple>
                        {/* <EditIcon /> */}
                        {video}
                      </MenuItem>
                    ))}
              </StyledMenu>
            </div>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="outlined"
              style={{
                color: "white",
                borderColor: "white",
                height: "2.5rem",
                width: "5rem",
                fontSize: "10px",
              }}
            >
              Log in
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
