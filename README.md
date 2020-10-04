# use-synced-local-storage

> Custom react hook for cross-synced local storage that can be accessed at any level

[![NPM](https://img.shields.io/npm/v/use-synced-local-storage.svg)](https://www.npmjs.com/package/use-synced-local-storage) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-synced-local-storage
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-synced-local-storage'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [berkeatac](https://github.com/berkeatac)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
