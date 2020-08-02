import React, { useState, useEffect } from 'react';
import * as Feather from '@styled-icons/feather';

import { Container, Wrapper, Button } from './styles';

import usePersistedState from '../../hooks/usePersistedState';

const ThemeSwitch: React.FC<any> = ({ onChangeValue }) => {
  const [theme, setTheme] = usePersistedState('@theme', 'light');

  useEffect(() => {
    if (theme) {
      onChangeValue(theme);
    }
  }, [theme]);

  const handleChangeTheme = (theme: string) => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Container>
      <Wrapper>
        {theme === 'dark' ? (
          <Button
            type="button"
            onClick={() => handleChangeTheme('light')}
            isActive
          >
            <Feather.Moon color="#FFFFFF" size={32} />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={() => handleChangeTheme('dark')}
            isActive
          >
            <Feather.Sun color="#FFFFFF" size={32} />
          </Button>
        )}
        {theme === 'light' ? (
          <Button type="button" onClick={() => handleChangeTheme('light')}>
            <Feather.Moon color="#FFFFFF" size={32} />
          </Button>
        ) : (
          <Button type="button" onClick={() => handleChangeTheme('dark')}>
            <Feather.Sun color="#FFFFFF" size={32} />
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default ThemeSwitch;
