import React, { useState, useEffect } from 'react';


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      (async () => {
        const savedTheme = await AsyncStorage.getItem(THEME_KEY);
        console.log('Saved theme:', savedTheme); 
        if (savedTheme) {
          setTheme(savedTheme);
        }
      })();
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      console.log('Current theme:', theme); 
      console.log('Switching to:', newTheme);
      setTheme(newTheme);
      AsyncStorage.setItem(THEME_KEY, newTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  