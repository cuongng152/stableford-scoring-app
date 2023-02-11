import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {useNavigate} from "react-router-dom";

export default function ConfirmationDialog(props) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const {navigation, displayText, descriptionText, proceedText} = props || {}
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (e) => {
        setOpen(false);
        if (e.target.id !== 'cancel-tee-off') {
            navigate(navigation)
        }
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                {displayText}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{width: "50%", justifyContent: "center"}}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {descriptionText}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button id={'cancel-tee-off'} onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        {proceedText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}