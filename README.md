# use-synced-local-storage

> Custom react hook for synced local storage, listens to manual or cross-tab changes and updates accordingly

[![NPM](https://img.shields.io/npm/v/use-synced-local-storage.svg)](https://www.npmjs.com/package/use-synced-local-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-synced-local-storage
```

## Usage

```jsx
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
```

## License

MIT © [berkeatac](https://github.com/berkeatac)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
