import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useScrollTrigger } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
];

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List sx={{ mt: 8 }}>
        {navItems.map((item) => (
          <ListItem key={item.label} sx={{ fontSize: 22 }}>
            <Link to={item.link}>{item.label}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          component="nav"
          sx={{ bgcolor: "rgba(32, 120, 201,0.4)", paddingY: 0.75 }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/"}>MUI</Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: { sm: 4 } }}>
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.link}
                  className="text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-400 [&.active]:bg-blue-600"
                >
                  {item.label}
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
