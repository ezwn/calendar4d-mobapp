import React, { useContext, useEffect } from "react";
import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";
import { pullEntries, pushEntries } from "shared/calendar/backendClient";
import { useSettings } from "shared/settings/Settings-ctx";

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
  const { settings } = useSettings();

  const [entries, setEntries, loaded] = useStorage(
    STORAGE_KEY,
    () => []
  );

  const saveEntries = async (entries) => {
    const updatedEntries = await pullEntries(settings, entries);
    await pushEntries(settings, updatedEntries);
    if (updatedEntries !== entries) {
      setEntries(updatedEntries);
    }
  };

  const loadEntries = async (entries) => {
    const updatedEntries = await pullEntries(settings, entries);
    if (updatedEntries !== entries) {
      await pushEntries(settings, updatedEntries);
      setEntries(updatedEntries);
    } else {
      console.log()
    }
  };

  // onEntriesChanged : save them
  useEffect(() => {
    if (loaded) {
      saveEntries(entries);
    }
  }, [loaded, saveEntries, entries]);

  // load entries at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      if (loaded) {
        loadEntries(entries);
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [loaded, loadEntries, entries]);

  // public API
  // ----------

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
