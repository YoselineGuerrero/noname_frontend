import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField, Grid } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
import { useState } from 'react';
import { fDate, fDateTime, fDateTimeSuffix } from 'src/utils/formatTime';
export default function AlertDialogSlide({ open, setOpen, setUser }) {
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(new Date('2021-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const [subject, setSubject] = useState();
  // const [date, setDate] = useState();
  const [status, setStatus] = useState();
  function subject_change(new_value) {
    setSubject(new_value);
  }
  function status_change(new_value) {
    setStatus(new_value);
  }
  const [customer, setCustomer] = useState('');
  function add_task() {
    setUser((pre) => [
      ...pre,
      {
        id: '#1334',
        content: subject,
        datetime: fDateTime(value),
        status: status,
        customer: customer
      }
    ]);
    setOpen(false);
    console.log(subject, fDateTime(value), fDateTimeSuffix(value), status);
  }
  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add new ticket</DialogTitle>
        <DialogContent style={{ margin: 'auto' }}>
          <Grid container>
            <Grid item xs={6}>
              <TextField id="standard-basic" label="ID" variant="standard" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                label="subject"
                variant="standard"
                value={subject}
                onChange={(e) => subject_change(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                label="status"
                variant="standard"
                value={status}
                onChange={(e) => status_change(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="standard-basic"
                label="Related customer"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
                variant="standard"
              />
            </Grid>
            <br />
            <Grid item xs={12} style={{ marginTop: '12px' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Date&Time picker"
                  value={value}
                  onChange={handleChange}
                  variant="standard"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={add_task}>add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
