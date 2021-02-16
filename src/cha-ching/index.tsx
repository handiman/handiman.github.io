import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core';

const HOURLY_RATE = 800;
const OYSTER_PRICE = 25;
const REFRESH_RATE = .25;
const Oyster = () => <img style={{ margin: 5 }} width="100" src="/assets/img/oyster.png" alt="Yum" />;

const useStyles = makeStyles(_ => ({
  moola: {
    position: 'absolute',
    zIndex: 1,
    margin: 0,
    padding: 0,
    height: '100vh',
    width: '100%',
    lineHeight: '100vh',
    textAlign: 'center',
    color: '#81644D',
    fontSize: 120,
    '& span': {
      paddingLeft: 5,
      fontSize: 40
    }
  }
}));

const ChaChing: React.FC<{
  hourlyRate: number,
  refreshRateInSeconds: number,
  averageOysterPrice: number
}> = ({ hourlyRate, refreshRateInSeconds, averageOysterPrice }) => {
  const change = (hourlyRate / 60 / 60) * refreshRateInSeconds;
  const [moola, setMoola] = useState(0);
  const [oysters, setOysters] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const tick = () => setMoola(current => current + change);
    const handle = setInterval(tick, 1000 * refreshRateInSeconds);
    return () => clearInterval(handle);
  }, []);

  useEffect(() => {
    setOysters(Math.floor(moola / averageOysterPrice));
  }, [moola]);

  return (
    <React.Fragment>
      <div className={classes.moola}>
        {Math.floor(moola)}
        <span>kr</span>
      </div>
      {[...Array(oysters)].map((_, index) => (
        <Oyster key={index} />
      ))}
    </React.Fragment>
  );
}

ReactDOM.render(<ChaChing hourlyRate={HOURLY_RATE} averageOysterPrice={OYSTER_PRICE} refreshRateInSeconds={REFRESH_RATE} />, document.getElementById('root'));

