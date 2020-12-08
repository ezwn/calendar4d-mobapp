import React, { useContext, useEffect } from "react";
import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";
import initialData from "./initial-data.json";
import { pullEntries, pushEntries } from "shared/backendClient";

const STORAGE_KEY = "calendar4d-entries";

const CalendarContext = React.createContext();

const chars = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';

export function generateEntyId(length = 16) {
  let str = '';
  const { length: n } = chars;
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * n));
  }
  return str;
}

export const CalendarProvider = ({ children }) => {
  const [entries, setEntries, loaded] = useStorage(
    STORAGE_KEY,
    () => initialData
  );

  const updateEntries = async () => {
    if (loaded) {
      const updatedEntries = await pullEntries(entries);
      await pushEntries(updatedEntries);
    }
  };

  useEffect(() => {
    updateEntries();
  }, [entries, loaded, updateEntries]);

  const addEntry = (item) => {
    setEntries([...entries, item]);
  };

  const updateEntry = (entry, valueMap) => {
    setEntries(entries.map(e => e.id !== entry.id ? e : { ...e, ...valueMap }));
  }

  const removeEntry = (entry,) => {
    setEntries(entries.filter(o => o.id !== entry.id));
  }

  return loaded ? (
    <CalendarContext.Provider
      value={{
        entries,
        setEntries,
        addEntry,
        removeEntry,
        updateEntry
      }}
    >
      {children}
    </CalendarContext.Provider>
  ) : null;
};

export const useCalendar = () => {
  return useContext(CalendarContext);
};
