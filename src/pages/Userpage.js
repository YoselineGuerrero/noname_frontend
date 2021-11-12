import * as React from 'react';

import { filter } from 'lodash';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { mockImgAvatar } from '../utils/mockImages';
import faker from 'faker';


// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Container,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  Item,
  Paper,
  Box,
  Grid,
  TableContainer,
  TablePagination,
  FormControl
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../components/_dashboard/user';
//
import USERLIST from '../_mocks_/user';


import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { dropRight } from 'lodash-es';



const userpage_user =  ({
    id: 1,
    avatarUrl: mockImgAvatar(1),
    name: 'Bassam Razzaq',
    email: 'bassamali01@gmail.com',
    company: 'Black Swan',
    age: 21,
    phone_number: faker.phone.phoneNumberFormat(),
    address: faker.address.streetAddress(),
    creditcard: "xxxx-xxxx-xxxx-xxxx",
    lastupdated: '11-13-2021',
    datecreated: '11-12-2021',
    plan: "Free Trial",
    assignment: "Employee",
    notes: "notes TBA"
  });


const handleChange = (event) => {
    setAge(event.target.value);
  };

  const actionform = (
      
    <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-standard-label">Action</InputLabel>
        <Select
          labelId="demo-simple-select-standard-autowidth-label"
          id="demo-simple-select-standard"
          onChange={handleChange}
          label="Action"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Add</MenuItem>
          <MenuItem value={20}>Edit</MenuItem>
          <MenuItem value={30}>Delete</MenuItem>
        </Select>

    </FormControl>
  );

const card1 = (
    <React.Fragment>
      <CardContent>
        <Avatar  src = {userpage_user.avatarUrl} style= {{ height: 100, width: 100 }} />
        <br />
        <Typography variant="h5" component="div">
        Age: {userpage_user.age}
        </Typography>
        <Typography variant="h5" component="div">
        Email: {userpage_user.email}
        </Typography>
        <Typography variant="h5" component="div">
        Phone Number: {userpage_user.phone_number}
        </Typography>
        <Typography variant="h5" component="div">
        Credit Card: {userpage_user.creditcard}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Grid sx={{ gridRow: '1', gridColumn: '1 / 5' }}>
            {actionform}
        </Grid>
        
        <Typography variant="h5" component="div">
        Last Updated: {userpage_user.lastupdated}
        </Typography>
        <Typography variant="h5" component="div">
        Date Created: {userpage_user.datecreated}
        </Typography>
        <Typography variant="h5" component="div">
        Plan: {userpage_user.plan}
        </Typography>
        <Typography variant="h5" component="div">
        Notes: {userpage_user.notes}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];
  

  const table1 = (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
  );


  
export default function Userpage() { 
    return (
    <Page title="Dashboard | Minimal-UI">
        <Container maxWidth="xl">
            <Box sx={{ pb: 5 }}>
                <Typography variant="h4">Contact List - Users</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={6} >
                    <Typography variant="h6">Personal Information</Typography>
                    <Card variant="outlined">{card1}</Card>
                </Grid>
                <Grid item xs={6} > 
                
                    <Typography variant="h6">General Information</Typography>
                    <Card variant="outlined">{card2}</Card>
                </Grid>
            </Grid>
            <Box>
                <Table>
                    <TableBody

                    >

                        
                    </TableBody>
                </Table>
            </Box>
          
          
        </Container>
    </Page>
    );
    }