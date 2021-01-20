import React, { useContext } from "react";
import { useStorage } from "ezwn-storage-native/JSONAsyncStorage";
import { useSettings } from "shared/settings/Settings-ctx";

const STORAGE_KEY = "calendar4d-entry-types";

const TopicsContext = React.createContext();

const chars = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';

export function generateId(length = 16) {
  let str = '';
  const { length: n } = chars;
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * n));
  }
  return str;
}

export const TopicsProvider = ({ children }) => {
  const { settings } = useSettings();

  const [topics, setTopics, loaded] = useStorage(
    STORAGE_KEY,
    () => []
  );

  // public API
  // ----------

  const addTopic = (item) => {
    setTopics([...topics, item]);
  };

  const updateTopic = (entry, valueMap) => {
    setTopics(topics.map(e => e.id !== entry.id ? e : { ...e, ...valueMap }));
  }

  const removeTopic = (entry,) => {
    setTopics(topics.filter(o => o.id !== entry.id));
  }

  return loaded ? (
    <TopicsContext.Provider
      value={{
        topics,
        setTopics,
        addTopic,
        removeTopic,
        updateTopic
      }}
    >
      {children}
    </TopicsContext.Provider>
  ) : null;
};

export const useTopics = () => {
  return useContext(TopicsContext);
};
