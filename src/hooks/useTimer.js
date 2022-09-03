import {useEffect, useState, useRef} from 'react';
export default ({time, onFinish, dependency}) => {
  const [timer, setTimer] = useState(0);
  const [interval, setIntervalDestroy] = useState(null);
  const numberSecsGone = useRef(0);

  const convertTime = timer => {
    if (!timer)
      return {
        mins: '00',
        secs: '00',
      };
    const minutes = Math.floor(timer / 60);
    const seconds = Math.floor(timer % 60);
    return {
      mins: minutes < 10 ? `0${minutes}` : minutes,
      secs: seconds < 10 ? `0${seconds}` : seconds,
    };
  };
  useEffect(() => {
    setTimer(time);
    if (interval) clearInterval(interval);
    if (!dependency?.[0]) return;
    setIntervalDestroy(
      setInterval(() => {
        numberSecsGone.current += 1;
        if (time - numberSecsGone.current === 0) onFinish(false);
        else setTimer(time - numberSecsGone.current);
      }, 1000),
    );
    return () => {
      numberSecsGone.current = 0;
    };
  }, dependency);
  return convertTime(timer);
};
