import React from 'react';
import styled from '@emotion/styled';

import { LocalizeSwitch } from '@seolhun/localize-components-atomic';
import {
  LocalizeThemeProvider,
  lightTheme,
  darkTheme,
  LocalizeThemeProps,
} from '@seolhun/localize-components';

const StyledBackground = styled.div<{}, LocalizeThemeProps>(({ theme }) => {
  return {
    backgroundColor: theme.colors.primaryBackground01,
    margin: '3rem 0',
    padding: '1rem 2rem',
  };
});

const ThemeChangerProvider: React.FC = ({ children }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <LocalizeThemeProvider theme={isChecked ? darkTheme : lightTheme}>
      <LocalizeSwitch
        htmlFor="test"
        checked={isChecked}
        onChange={handleChange}
      />
      <StyledBackground>{children}</StyledBackground>
    </LocalizeThemeProvider>
  );
};

export { ThemeChangerProvider };

export default ThemeChangerProvider;