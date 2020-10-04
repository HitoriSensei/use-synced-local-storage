import React from 'react'
import { useMyHook } from 'use-synced-local-storage'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App