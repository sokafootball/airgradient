'use client';
import { useGetLocationCurrentMeasuresQuery } from '../../api';
import { COLORS, LOCATION_ID } from '../../constants';
import styles from './page.module.scss';
import CustomGradientGauge from './components/CustomGradientGauge/CustomGradientGauge';
import StringMeasurement from './components/StringMeasurement/StringMeasurement';

const Home = () => {
  const { data, isLoading, isError } = useGetLocationCurrentMeasuresQuery({
    locationId: LOCATION_ID,
  });

  return (
    <main className={styles.main}>
      {isLoading ? (
        <p>In caricamento...</p>
      ) : isError || !data ? (
        <p>Errore caricamento, riprovare più tardi</p>
      ) : (
        <>
          <StringMeasurement
            label='Temperature'
            value={data?.atmp}
            valueSuffix='C°'
          />
          <CustomGradientGauge
            value={data?.rhum}
            label={'Relative Humidity'}
            limits={[
              { value: 55, color: COLORS.green },
              { value: 70, color: COLORS.orange },
              { value: 100, color: COLORS.red },
            ]}
            valueSuffix='%'
            tickSuffix='%'
          />
          <CustomGradientGauge
            value={data?.rco2}
            label={'CO2 in ppm'}
            limits={[
              { value: 700, color: COLORS.green },
              { value: 999, color: COLORS.red },
            ]}
            min={0}
            max={1000}
          />
          <StringMeasurement
            label='Total Volatile Components in ppb'
            value={data?.tvoc}
            limits={[
              { value: 65, color: COLORS.lightBlue },
              { value: 220, color: COLORS.green },
              { value: 660, color: COLORS.orange },
              { value: 2200, color: COLORS.red },
              { value: 5500, color: COLORS.darkRed },
            ]}
            valueSuffix='ppb'
          />
          <StringMeasurement
            value={data?.pm02}
            label={'PM2 in μg/m³'}
            limits={[
              { value: 10, color: COLORS.lightBlue },
              { value: 20, color: COLORS.green },
              { value: 25, color: COLORS.orange },
              { value: 50, color: COLORS.red },
              { value: 75, color: COLORS.darkRed },
              { value: 800, color: COLORS.purple },
            ]}
            valueSuffix='μg/m³'
          />
          <StringMeasurement
            value={data?.pm10}
            label={'PM10 in μg/m³'}
            limits={[
              { value: 20, color: COLORS.lightBlue },
              { value: 40, color: COLORS.green },
              { value: 50, color: COLORS.orange },
              { value: 100, color: COLORS.red },
              { value: 150, color: COLORS.darkRed },
              { value: 1200, color: COLORS.purple },
            ]}
            valueSuffix='μg/m³'
          />
        </>
      )}
    </main>
  );
};

export default Home;
