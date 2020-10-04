import React, { useEffect, useState } from "react";

export const useSyncedLocalStorage = (key, initialValue) => {
  const checkGetLocalValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const [storage, setStorage] = useState(checkGetLocalValue());

  const setStorageContent = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storage) : value;
      setStorage(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    window.addEventListener("storage", () => setStorage(checkGetLocalValue()));
    return () => {
      window.removeEventListener("storage", () =>
        setStorage(checkGetLocalValue())
      );
    };
  }, []);

  return [storage, setStorageContent];
};
