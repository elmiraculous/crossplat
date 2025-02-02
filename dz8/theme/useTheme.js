import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Colors } from './Colors';

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return { colors: Colors[theme] };
};
