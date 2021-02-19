/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect } from 'react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-91628183-5');

const useGaTrackPage = (path:string) => {
  useEffect(() => {
    ReactGA.pageview(path);
  }, [path]);
};

export default useGaTrackPage;
