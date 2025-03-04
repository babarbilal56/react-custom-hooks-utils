import { useState } from 'react';

function useCookie(key, initialValue) {
  const [cookie, setCookie] = useState(() => {
    const storedCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${key}=`));
    return storedCookie ? storedCookie.split('=')[1] : initialValue;
  });

  const updateCookie = (value, daysToExpire = 7) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + daysToExpire);

    document.cookie = `${key}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    setCookie(value);
  };

  return [cookie, updateCookie];
}
export default useCookie;
