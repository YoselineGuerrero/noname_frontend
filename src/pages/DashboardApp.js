// material
import { Box, Grid, Container, Typography, Card } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';
import Chart from "react-google-charts";
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        
        <Grid container spacing={3}>
          <Grid item xs={7} >
          <Card>
            <Box m = {3}>
          <Chart
          width = '100%'
          height = {'350px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
              ['Day', 'In progress', 'Completed', 'Not started', 'Cancelled'],
              ['11/7', 17, 14, 15, 1],
              ['11/8', 20, 11, 30, 0],
              ['11/9', 30, 8, 13, 3],
              ['11/10', 10, 24, 1, 2],
              ['11/11', 17, 14, 15, 1],
              ['11/12', 20, 11, 30, 0],
              ['11/13', 30, 8, 13, 3],
            ]}
            options={{
              // Material design options
              chart: {
                title: 'Task Report',
                subtitle: 'Daily view of task progress.',
              },
            }}
          />
          </Box>
          </Card>
          </Grid>

        <Grid item xs={5}>
          <Card>
            <Box mt = {2}>
            <Chart
              width={'460px'}
              height={'385px'}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['userType', 'percentage'],
                ['Membership', 68],
                ['Free Trial User', 21],
                ['Single Sale', 9],
                ['Companies', 2],
              ]}
              options={{
                title: 'Revenue by Group of customers',
                is3D: true,
              }}
          />
          </Box>
          </Card>
        </Grid>


        <Grid item xs={12}>
          <Card>
          <Box m = {2}>
            Customers locations
            <Chart
              width = {'950px'}
              height={'400px'}
              chartType="GeoChart"
              data={[
                ['Country', 'Popularity'],
                ['Germany', 23],
                ['United States', 106],
                ['Brazil', 39],
                ['Canada', 57],
                ['France', 62],
                ['RU', 78],
                ['Mexico', 44],
                ['Cameroon', 36],
                ['Canary Islands', 28],
                ['Cape Verde', 15],
                ['Central African Republic', 48],
                ['Ceuta', 35],
                ['Chad', 28],
                ['China', 49],
                ['Australia', 89],
                ['India', 39]
              ]}
              // Note: you will need to get a mapsApiKey for your project.
              // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
              //mapsApiKey="YOUR_KEY"
            />
            </Box>
          </Card>
        </Grid>

          <Grid item xs={12}>
            <Card>
            <Box m = {2}>
          <Chart
            width={1000}
            height={350}
            chartType="Calendar"
            loader={<div>Loading Chart</div>}
            data={[
              [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
              [new Date(2020, 1, 7), 38177],
              [new Date(2020, 1, 3), 38705],
              [new Date(2020, 1, 19), 38210],
              [new Date(2020, 1, 12), 38029],
              [new Date(2020, 1, 18), 38823],
              [new Date(2020, 1, 21), 38345],
              [new Date(2020, 1, 20), 38436],
              [new Date(2020, 2, 16), 38447],
              [new Date(2020, 2, 12), 38447],
              [new Date(2020, 2, 19), 38447],
              [new Date(2020, 2, 3), 38447],
              [new Date(2020, 3, 19), 37032],
              [new Date(2020, 3, 14), 38024],
              [new Date(2020, 3, 17), 38024],
              [new Date(2020, 3, 19), 38108],
              [new Date(2020, 3, 7), 38229],
              [new Date(2020, 6, 5), 37032],
              [new Date(2020, 6, 6), 38024],
              [new Date(2020, 6, 4), 38024],
              [new Date(2020, 6, 16), 38108],
              [new Date(2020, 6, 17), 38229],
              [new Date(2020, 7, 9), 37032],
              [new Date(2020, 7, 2), 38024],
              [new Date(2020, 7, 6), 38024],
              [new Date(2020, 7, 18), 38108],
              [new Date(2020, 7, 20), 38229],
              [new Date(2020, 8, 5), 37032],
              [new Date(2020, 8, 17), 38024],
              [new Date(2020, 9, 5), 38024],
              [new Date(2020, 9, 8), 38108],
              [new Date(2020, 9, 19), 38229],
              [new Date(2020, 5, 14), 38229],
              [new Date(2020, 5, 5), 37032],
              [new Date(2020, 5, 30), 38024],
              [new Date(2020, 5, 12), 38024],
              [new Date(2020, 5, 18), 38108],
              [new Date(2020, 4, 7), 38229],
              [new Date(2020, 4, 3), 37032],
              [new Date(2020, 4, 29), 38024],
              [new Date(2020, 4, 14), 38024],
              [new Date(2020, 4, 19), 38108],
              [new Date(2020, 4, 17), 38229],

              [new Date(2021, 3, 13), 37032],
              [new Date(2021, 3, 14), 38024],
              [new Date(2021, 3, 15), 38024],
              [new Date(2021, 3, 16), 38108],
              [new Date(2021, 3, 17), 38229],
              [new Date(2021, 1, 3), 37032],
              [new Date(2021, 1, 4), 38024],
              [new Date(2021, 2, 5), 38024],
              [new Date(2021, 2, 6), 38108],
              [new Date(2021, 2, 7), 38229],
              [new Date(2021, 2, 3), 37032],
              [new Date(2021, 2, 4), 38024],
              [new Date(2021, 2, 2), 38024],
              [new Date(2021, 2, 14), 38108],
              [new Date(2021, 4, 8), 38229],
              [new Date(2021, 4, 9), 37032],
              [new Date(2021, 4, 4), 38024],
              [new Date(2021, 4, 5), 38024],
              [new Date(2021, 4, 1), 38108],
              [new Date(2021, 4, 7), 38229],
              [new Date(2021, 6, 3), 37032],
              [new Date(2021, 6, 4), 38024],
              [new Date(2021, 6, 5), 38024],
              [new Date(2021, 6, 6), 38108],
              [new Date(2021, 6, 7), 38229],
              [new Date(2021, 7, 3), 37032],
              [new Date(2021, 7, 4), 38024],
              [new Date(2021, 7, 2), 38024],
              [new Date(2021, 7, 14), 38108],
              [new Date(2021, 7, 8), 38229],
              [new Date(2021, 8, 9), 37032],
              [new Date(2021, 8, 4), 38024],
              [new Date(2021, 9, 5), 38024],
              [new Date(2021, 9, 1), 38108],
              [new Date(2021, 9, 7), 38229],
              [new Date(2021, 5, 8), 38229],
              [new Date(2021, 5, 9), 37032],
              [new Date(2021, 5, 4), 38024],
              [new Date(2021, 5, 5), 38024],
              [new Date(2021, 5, 1), 38108]
            ]}
            options={{
              title: 'Red Sox Attendance',
            }}
          />
          </Box>
          </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
