import React from 'react';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Editform = ({edit}) => {
    if (edit) {
        return (
            <form className='formEdit'>
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
                <Button color="primary">
                    Edit
                </Button>
            </form>
        )
    }
    else {
        return (
            <div className='formEdit'>
                <Typography variant="h3" component="h3">
                    Welcome!
                </Typography>
                <Typography variant="body2" component="h4">
                    Please select an exercise from the list on the left side.
                </Typography>
            </div>
            
        )
    }
}

export default Editform;
