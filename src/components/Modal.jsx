/** @format */

import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MyModal = ({ open, setOpen, listOfCards, setlistOfCards }) => {
  const [price, setPrice] = useState("");

  const handleClose = () => setOpen(false);

  const priceAscending = () => {
    setlistOfCards([...listOfCards].sort((a, b) => a.price - b.price));
  };

  const priceDescending = () => {
    setlistOfCards([...listOfCards].sort((a, b) => b.price - a.price));
  };

  const handelChange = (e) => {
    setPrice(e.target.value);
    if (e.target.value === "ASC") {
      priceAscending();
    } else if (e.target.value === "DESC") {
      priceDescending();
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'>
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h6' component='h2'>
          Sort:
        </Typography>
        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Price</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={price}
              label={price}
              onChange={handelChange}>
              <MenuItem value='ASC'>Price ASC</MenuItem>
              <MenuItem value='DESC'>Price DESC</MenuItem>
            </Select>
          </FormControl>
        </Typography>
      </Box>
    </Modal>
  );
};

export default MyModal;
