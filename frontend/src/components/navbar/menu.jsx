import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Link, useLocation} from 'react-router'

export default function Menu() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const location = useLocation()
  const path = location.pathname
  console.log(path)

  return (
    <>
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            Football Clubs
            </ListSubheader>
        }
        >
        <ListItemButton onClick={handleClick} component={Link} to="/">
            <ListItemIcon>
            <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="All Clubs" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary="Netherlands" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary="India" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <DashboardCustomizeIcon />
                </ListItemIcon>
                <ListItemText primary="France" />
            </ListItemButton>
            </List>
        </Collapse>
        </List>

        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            Create Records
        </ListSubheader>
        }
        >
        <ListItemButton component={Link} to="/create">
            <ListItemIcon>
                <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Create Clubs" />
        </ListItemButton>
        </List>
</>
  );
}
