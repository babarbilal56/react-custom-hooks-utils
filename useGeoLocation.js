import { useState, useEffect, useCallback } from 'react';

class CustomGeoLocationError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'CustomGeoLocationError';
    this.code = code;
  }
}


function useGeoLocation(options, watch = false) {
  const [geoLocationState, setGeoLocationState] = useState({
    loading: true,
    coordinates: null,
    error: null,
    isWatching: watch,
  });

  const onSuccess = useCallback(
    (position) => {
      setGeoLocationState((prevState) => ({
        ...prevState,
        loading: false,
        coordinates: position.coords,
        error: null,
      }));
    },
    [setGeoLocationState]
  );

  const onError = useCallback(
    (error) => {
      setGeoLocationState((prevState) => ({
        ...prevState,
        loading: false,
        coordinates: null,
        error: new CustomGeoLocationError(error.message, error.code),
      }));
    },
    [setGeoLocationState]
  );

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoLocationState({
        loading: false,
        coordinates: null,
        error: new CustomGeoLocationError('Geolocation is not supported by this browser.', 0),
        isWatching: false,
      });
      return;
    }

    let watcher = null;
    if (watch) {
      watcher = navigator.geolocation.watchPosition(onSuccess, onError, options);
    } else {
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    }

    return () => {
      if (watcher !== null) {
        navigator.geolocation.clearWatch(watcher);
      }
    };
  }, [watch, options, onSuccess, onError]);

  return geoLocationState;
}

export { useGeoLocation };
