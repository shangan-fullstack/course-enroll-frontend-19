import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import LoginDialog from "./LoginDialog";


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




export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Course Enrollment Service
          </Typography>
          <Button color="inherit" component={Link} to="/">All Courses</Button>
          <Button color="inherit" component={Link} to="/enrolled">Enrolled Courses</Button>
          <span>|</span>
          <Button color="inherit" onClick={handleClickOpen}>Login</Button>
        </Toolbar>
      </AppBar>
      <LoginDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
    </div>
  );
}
