import React, { useContext, useEffect } from "react";
import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";
import initialData from "./initial-data.json";
import { useBackendSave } from "shared/useBackendSave";

const STORAGE_KEY = "calendar4d-entries";

const CalendarContext = React.createContext();

const chars = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';

function generateId(length = 16) {
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

  useEffect(() => {
    if (loaded) {
      useBackendSave(entries);
    }
  }, [entries, loaded]);

  const addEntry = (template, values) => {
    const item = {};
    for (let k in template) {
      const templateValue = template[k];
      const isVar = templateValue.startsWith("$");
      const isId = templateValue === "#";
      item[k] = isId ? generateId() : isVar
        ? values[templateValue.substring(1)]
        : templateValue;
    }

    setEntries([...entries, item]);
  };

  const updateEntry = (observation, key, value) => {
    setEntries(entries.map(o => o.id !== observation.id ? o : { ...o, [key]: value }));
  }

  const removeEntry = (observation, key, value) => {
    setEntries(entries.filter(o => o.id !== observation.id));
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
