import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core';

const HOURLY_RATE = 875;
const OYSTER_PRICE = 25;
const REFRESH_RATE = .25;
const Oyster = () => <img style={{ margin: 5 }} width="100" src="https://henrikbecker.azurewebsites.net/img/oyster.png" alt="" />;

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

const ChaChing = (props: {
  hourlyRate: number,
  refreshRateInSeconds: number,
  averageOysterPrice: number
}) => {
  const { hourlyRate, refreshRateInSeconds, averageOysterPrice } = props;
  const [moola, setMoola] = useState(0);
  const [oysters, setOysters] = useState(0);
  const classes = useStyles();

  const tick = () => {
    const change = (hourlyRate / 60 / 60) * refreshRateInSeconds;
    setMoola(current => {
      var state = current + change;
      setOysters(Math.round(state / averageOysterPrice))
      return state;
    });
  }

  useEffect(() => {
    setInterval(tick, 1000 * refreshRateInSeconds);
  }, []);

  return (
    <>
      <div className={classes.moola}>
        {Math.round(moola)}
        <span>kr</span>
      </div>
      {[...Array(oysters)].map((_, index) => (
        <Oyster key={index} />
      ))}
    </>
  );
}

ReactDOM.render(<ChaChing hourlyRate={HOURLY_RATE} averageOysterPrice={OYSTER_PRICE} refreshRateInSeconds={REFRESH_RATE} />, document.getElementsByTagName('main')[0]);

