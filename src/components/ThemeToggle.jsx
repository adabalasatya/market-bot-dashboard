import { useState, useEffect } from 'react';
import { Button } from "@tremor/react";
import { SunIcon, MoonIcon } from './Icons';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <Button
      size="xs"
      variant="secondary"
      className="fixed top-4 right-4"
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}

export default ThemeToggle;