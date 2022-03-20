import React, { createContext, PropsWithChildren, useState } from "react";


export const storeInit = {
  dark: window?.matchMedia('(prefers-color-scheme: dark)').matches || true as boolean,
  path: window?.location.pathname || '',
};
export type Store = typeof storeInit;
export const storeContext = createContext<
  [Store, (store: Partial<Store>) => void]
>([storeInit, () => { }]);

export const StoreProvider = ({ children }: PropsWithChildren<{}>) => {

  const [store, set] = useState(storeInit);
  const setStore = (draft: Partial<Store>) => set({ ...store, ...draft })
  return (
    <storeContext.Provider value={[store, setStore]}>
      {children}
    </storeContext.Provider>
  )
};

export const useStore = () => React.useContext(storeContext);
