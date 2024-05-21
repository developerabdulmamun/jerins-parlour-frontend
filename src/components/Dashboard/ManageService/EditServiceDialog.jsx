import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

const EditServiceDialog = ({
  open,
  handleClose,
  formValues,
  handleInputChange,
  handleSave,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Service</DialogTitle>

      <DialogContent>
        <TextField
          margin="dense"
          name="heading"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          value={formValues.heading}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          value={formValues.description}
          onChange={handleInputChange}
        />
        <TextField
          margin="dense"
          name="price"
          label="Price ($)"
          type="text"
          fullWidth
          variant="outlined"
          value={formValues.price}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditServiceDialog;
