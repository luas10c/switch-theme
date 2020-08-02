import { useState, useEffect } from 'react';

const initialState = (key: string, initialValues: any) => {
  try {
    const storedItem = localStorage.getItem(key);
    if (storedItem) {
      return typeof storedItem === 'object'
        ? JSON.parse(storedItem)
        : storedItem;
    }

    return initialValues;
  } catch (error) {
    //
    // console.log(error);
  }
};

const usePersistedState = (key: string, initialValues: any) => {
  const [state, setState] = useState(() => initialState(key, initialValues));

  useEffect(() => {
    localStorage.setItem(
      key,
      typeof state === 'object' ? JSON.stringify(state) : state
    );
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
