'use client';
import { useGetLocationCurrentMeasuresQuery } from '../../api';
import { LOCATION_ID } from '../../constants';
import styles from './page.module.scss';

const Home = () => {
  const response = useGetLocationCurrentMeasuresQuery({
    locationId: LOCATION_ID,
  });
  return <main className={styles.main}>test</main>;
};

export default Home;
