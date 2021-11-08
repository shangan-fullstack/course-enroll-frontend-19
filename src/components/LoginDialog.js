import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from "@material-ui/core";

export default function LoginDialog(props) {
    let username;
    let password;

    return (
        <div>

            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Please login</DialogTitle>
                <DialogContent>
                        <TextField id="standard-basic" label="Username" fullWidth onChange={e => username = e.target.value}/>
                        <TextField id="standard-basic" label="Password" fullWidth type="password" onChange={e => password = e.target.value}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={login} color="primary" autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

    function login() {
        console.log("Submitting", username, password);
    }
}
