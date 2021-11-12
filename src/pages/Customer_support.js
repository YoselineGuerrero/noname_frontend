import { Container, Grid } from '@mui/material';
import React from 'react';
import { Tasktbl, Tickettbl, Emailtbl, Calltbl } from 'src/components/_dashboard/customer_support';
export default function Customer_support() {
  return (
    <Container maxWidth="xlo">
      <h2>Customer support</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Tasktbl />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Tickettbl />
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Emailtbl />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Calltbl />
        </Grid>
      </Grid>
    </Container>
  );
}
