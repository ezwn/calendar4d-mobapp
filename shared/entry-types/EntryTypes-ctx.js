import React, { useContext } from "react";
import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";
import { useSettings } from "shared/settings/Settings-ctx";

const STORAGE_KEY = "calendar4d-entry-types";

const EntryTypesContext = React.createContext();

const chars = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';

export function generateEntyId(length = 16) {
  let str = '';
  const { length: n } = chars;
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * n));
  }
  return str;
}

export const EntryTypesProvider = ({ children }) => {
  const { settings } = useSettings();

  const [entryTypes, setEntryTypes, loaded] = useStorage(
    STORAGE_KEY,
    () => []
  );

  // public API
  // ----------

  const addEntryType = (item) => {
    setEntryTypes([...entryTypes, item]);
  };

  const updateEntryType = (entry, valueMap) => {
    setEntryTypes(entryTypes.map(e => e.id !== entry.id ? e : { ...e, ...valueMap }));
  }

  const removeEntryType = (entry,) => {
    setEntryTypes(entryTypes.filter(o => o.id !== entry.id));
  }

  return loaded ? (
    <EntryTypesContext.Provider
      value={{
        entryTypes,
        setEntryTypes,
        addEntryType,
        removeEntryType,
        updateEntryType
      }}
    >
      {children}
    </EntryTypesContext.Provider>
  ) : null;
};

export const useEntryTypes = () => {
  return useContext(EntryTypesContext);
};
