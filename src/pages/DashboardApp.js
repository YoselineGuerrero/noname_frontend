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
              [new Date(2020, 0, 19), 36],
              [new Date(2020, 0, 7), 72],
              [new Date(2020, 0, 5), 46],
              [new Date(2020, 0, 6), 18],
              [new Date(2020, 0, 4), 63],
              [new Date(2020, 0, 16), 46],
              [new Date(2020, 1, 7), 38],
              [new Date(2020, 1, 3), 94],
              [new Date(2020, 1, 19), 64],
              [new Date(2020, 1, 12), 73],
              [new Date(2020, 1, 18), 83],
              [new Date(2020, 1, 21), 75],
              [new Date(2020, 1, 20), 36],
              [new Date(2020, 2, 16), 44],
              [new Date(2020, 2, 12), 37],
              [new Date(2020, 2, 19), 77],
              [new Date(2020, 2, 3), 47],
              [new Date(2020, 3, 19), 26],
              [new Date(2020, 3, 14), 24],
              [new Date(2020, 3, 17), 34],
              [new Date(2020, 3, 19), 81],
              [new Date(2020, 3, 7), 36],
              [new Date(2020, 6, 5), 16],
              [new Date(2020, 6, 6), 27],
              [new Date(2020, 6, 4), 68],
              [new Date(2020, 6, 16), 37],
              [new Date(2020, 6, 17), 94],
              [new Date(2020, 7, 9), 73],
              [new Date(2020, 7, 2), 53],
              [new Date(2020, 7, 6), 37],
              [new Date(2020, 7, 18), 40],
              [new Date(2020, 7, 20), 39],
              [new Date(2020, 8, 5), 46],
              [new Date(2020, 8, 17), 83],
              [new Date(2020, 9, 5), 56],
              [new Date(2020, 9, 8), 47],
              [new Date(2020, 9, 19), 85],
              [new Date(2020, 5, 14), 47],
              [new Date(2020, 5, 5), 64],
              [new Date(2020, 5, 30), 52],
              [new Date(2020, 5, 12), 17],
              [new Date(2020, 5, 18), 26],
              [new Date(2020, 4, 7), 28],
              [new Date(2020, 4, 3), 25],
              [new Date(2020, 4, 29), 65],
              [new Date(2020, 4, 14), 37],
              [new Date(2020, 4, 19), 38],
              [new Date(2020, 4, 17), 48],
              [new Date(2020, 10, 4), 35],
              [new Date(2020, 10, 2), 74],
              [new Date(2020, 10, 14), 94],
              [new Date(2020, 10, 8), 29],
              [new Date(2020, 10, 9), 25],
              [new Date(2020, 10, 4), 84],
              [new Date(2020, 10, 5), 25],
              [new Date(2020, 11, 4), 36],
              [new Date(2020, 11, 2), 38],
              [new Date(2020, 11, 14), 58],
              [new Date(2020, 11, 8), 93],
              [new Date(2020, 11, 9), 104],
              [new Date(2020, 11, 7), 106],
              [new Date(2020, 11, 5), 27],

              [new Date(2021, 0, 19), 73],
              [new Date(2021, 0, 7), 94],
              [new Date(2021, 0, 5), 93],
              [new Date(2021, 0, 6), 58],
              [new Date(2021, 0, 4), 47],
              [new Date(2021, 0, 16), 38],
              [new Date(2021, 3, 13), 26],
              [new Date(2021, 3, 14), 27],
              [new Date(2021, 3, 15), 29],
              [new Date(2021, 3, 16), 93],
              [new Date(2021, 3, 17), 74],
              [new Date(2021, 1, 3), 24],
              [new Date(2021, 1, 4), 64],
              [new Date(2021, 2, 5), 59],
              [new Date(2021, 2, 6), 30],
              [new Date(2021, 2, 7), 58],
              [new Date(2021, 2, 3), 84],
              [new Date(2021, 2, 4), 74],
              [new Date(2021, 2, 2), 84],
              [new Date(2021, 2, 14), 63],
              [new Date(2021, 4, 8), 68],
              [new Date(2021, 4, 9), 47],
              [new Date(2021, 4, 4), 37],
              [new Date(2021, 4, 5), 85],
              [new Date(2021, 4, 1), 63],
              [new Date(2021, 4, 7), 56],
              [new Date(2021, 6, 3), 36],
              [new Date(2021, 6, 4), 74],
              [new Date(2021, 6, 5), 26],
              [new Date(2021, 6, 6), 34],
              [new Date(2021, 6, 7), 63],
              [new Date(2021, 7, 3), 73],
              [new Date(2021, 7, 4), 76],
              [new Date(2021, 7, 2), 83],
              [new Date(2021, 7, 14), 72],
              [new Date(2021, 7, 8), 57],
              [new Date(2021, 8, 9), 74],
              [new Date(2021, 8, 4), 83],
              [new Date(2021, 9, 5), 95],
              [new Date(2021, 9, 1), 105],
              [new Date(2021, 9, 7), 73],
              [new Date(2021, 5, 8), 83],
              [new Date(2021, 5, 9), 39],
              [new Date(2021, 5, 4), 84],
              [new Date(2021, 5, 5), 85],
              [new Date(2021, 5, 1), 94],
              [new Date(2021, 10, 4), 105],
              [new Date(2021, 10, 2), 10],
              [new Date(2021, 10, 14), 12],
              [new Date(2021, 10, 8), 53],
              [new Date(2021, 10, 9), 32],
              [new Date(2021, 10, 4), 89],
              [new Date(2021, 10, 5), 37],
              [new Date(2021, 11, 4), 58],
              [new Date(2021, 11, 2), 92],
              [new Date(2021, 11, 14), 74],
              [new Date(2021, 11, 8), 57],
              [new Date(2021, 11, 9), 84],
              [new Date(2021, 11, 7), 72],
              [new Date(2021, 11, 5), 52],
            ]}
            options={{
              title: 'Daily Sales Profits',
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

          {/*<Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>


          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>*/}
        </Grid>
      </Container>
    </Page>
  );
}
