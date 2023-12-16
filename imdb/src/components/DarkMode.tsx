'use client';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="cursor-pointer">
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode onClick={() => setTheme('light')} className="text-xl hover:text-amber-500" />
        ) : (
          <BsFillMoonFill onClick={() => setTheme('dark')} className="text-xl hover:text-amber-500" />
        ))}
    </section>
  );
};

export default DarkMode;
