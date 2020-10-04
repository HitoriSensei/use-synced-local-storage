# use-synced-local-storage

> Custom react hook for synced local storage, listens to manual or cross-tab changes and updates accordingly

[![NPM](https://img.shields.io/npm/v/use-synced-local-storage.svg)](https://www.npmjs.com/package/use-synced-local-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-synced-local-storage
```

## Usage

```jsx
import React from "react";
import { useSyncedLocalStorage } from "use-synced-local-storage";

const App = () => {
  const [storage, setStorage] = useSyncedLocalStorage("storage-key", 1);

  return (
    <>
      {storage}
      <button onClick={() => setStorage(storage + 1)}>click me</button>
    </>
  );
};
export default App;
```

## License

MIT © [berkeatac](https://github.com/berkeatac)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
