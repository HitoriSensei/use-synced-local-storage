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
