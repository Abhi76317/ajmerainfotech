import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import axios from '../service/axiosService';
import { isEmail, isName } from '../validation/validation';
import { showError, showSuccess } from '../redux/slice/alertSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()

  const [state, setState] = useState({
    email: '',
    first_name: '',
    last_name: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((preVal) => ({
      ...preVal, [name]: value,
    }
    ))
  }

  const handleSubmit = () => {
    if (!isEmail(state.email)) {
      dispatch(showError({ message: "email is not valid" }))
      return
    }
    if (!isName(state.first_name)) {
      dispatch(showError({ message: "first name is not valid" }))
      return
    }
    if (!isName(state.last_name)) {
      dispatch(showError({ message: "last name is not valid" }))
      return
    }
    axios.post('/users', state).then((res) => {
      dispatch(showSuccess({ message: `user added tith id ${res.id}` }))
      setOpen(false)
    }).catch((err) => dispatch(showError(err)))
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add User
          </Typography>
          <Box style={{
            minHeight: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
          >
            <TextField fullWidth label="email" variant="outlined" onChange={handleChange} name="email" value={state.email} />
            <TextField fullWidth label="first name" variant="outlined" onChange={handleChange} name="first_name" value={state.first_name} />
            <TextField fullWidth label="last name" variant="outlined" onChange={handleChange} name="last_name" value={state.last_name} />
            <Button onClick={handleSubmit}>Add</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}