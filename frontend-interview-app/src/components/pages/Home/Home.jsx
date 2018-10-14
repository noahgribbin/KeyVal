import React from 'react';
import SampleComponent from '../../SampleComponent';

import styles from './Home.scss';

const Home = () => (
  <div data-test-hook="homePage" className={styles.home}>
    <SampleComponent />
  </div>
);

export default Home;
