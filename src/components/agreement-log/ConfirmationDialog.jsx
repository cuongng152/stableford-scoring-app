import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useNavigate} from "react-router-dom";

export default function ConfirmationDialog() {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate('/play')
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Are you ready?
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{width: "50%", justifyContent: "center"}}
            >
                {/*<DialogTitle id="alert-dialog-title">*/}
                {/*    {"Are you ready?"}*/}
                {/*</DialogTitle>*/}
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                       Let's tee off. Shall we?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        Tee off
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}