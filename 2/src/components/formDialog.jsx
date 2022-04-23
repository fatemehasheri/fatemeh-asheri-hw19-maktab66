import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Fab color="secondary" onClick={handleClickOpen} aria-label="add">
            <AddIcon />
        </Fab>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
            Create a New Skills
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please fill out the form below.
          </DialogContentText>
            <form>
                <TextField
                    label="Title"
                    // value={title}
                    // onChange={this.handleChange('title')}
                    margin="normal"
                    fullWidth
                />
                <br />
                <FormControl fullWidth>
                    <InputLabel htmlFor="skills">Skills</InputLabel>
                    <Select
                        fullWidth
                        // value={skills}
                        // onChange={this.handleChange('skills')}
                    >
                        {/* {categories.map(category =>
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        )} */}
                    </Select>
                </FormControl>
                <br />
                <TextField
                    label="Description"
                    multiline
                    rows="4"
                    // value={description}
                    // onChange={this.handleChange('description')}
                    margin="normal"
                    fullWidth
                />
                <br />
            </form>
        </DialogContent>
        <Button color="primary" onClick={handleClose}>
            Create
        </Button>
      </Dialog>
    </div>
  );
}
