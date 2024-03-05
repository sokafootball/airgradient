'use client';
import { useGetLocationCurrentMeasuresQuery } from '../../api';
import { LOCATION_ID } from '../../constants';
import styles from './page.module.scss';
import { BarChart, BarChartProps } from '@mui/x-charts/BarChart';
import { createTheme } from '@mui/material';
import { lime, purple } from '@mui/material/colors';

const Home = () => {
  const { data } = useGetLocationCurrentMeasuresQuery({
    locationId: LOCATION_ID,
  });
  const theme = createTheme({
    palette: {
      primary: lime,
      secondary: purple,
    },
  });

  return (
    <main className={styles.main}>
      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </main>
  );
};

export default Home;
