import React from "react";
import "./AppBar.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter, Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function GuestAppBar(props) {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" id="navbar-color">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/allplaces" className="no-link-style">
              <span id="lets-roll-logo">LET'S ROLL</span>
            </Link>
          </Typography>

          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleClose("/allplaces")}>
                    ALL SKATE PLACES
                  </MenuItem>

                  <MenuItem onClick={() => handleClose("/tutorials")}>
                    TUTORIALS
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("/signup")}>
                    SIGN UP
                  </MenuItem>
                  <MenuItem onClick={() => handleClose("/login")}>
                    LOG IN
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <ButtonGroup>
                  <Button variant="contained" className="nav-button">
                    <Link to="/allplaces" className="no-link-style">
                      ALL SKATE PLACES
                    </Link>
                  </Button>

                  <Button variant="contained" className="nav-button">
                    <Link to="/tutorials" className="no-link-style">
                      TUTORIALS
                    </Link>
                  </Button>
                  <Button variant="contained" className="nav-button">
                    <Link to="/signup" className="no-link-style">
                      SIGN UP
                    </Link>
                  </Button>
                  <Button variant="contained" className="nav-button">
                    <Link to="/login" className="no-link-style">
                      LOG IN
                    </Link>
                  </Button>
                </ButtonGroup>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(GuestAppBar);
