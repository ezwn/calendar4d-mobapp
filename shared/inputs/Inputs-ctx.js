import React, { useContext } from "react";
import { useSchema } from "shared/data-mng-lang/Schema-ctx";

const InputsContext = React.createContext();

export const InputsProvider = ({ children }) => {
  const { schema: { spaces: { EntryType: { values: entryTypes } } } } = useSchema();

  const orderedEntryTypes = entryTypes.sort((e1, e2) => e1.name===e2.name ? 0 : e1.name<e2.name ? -1 : 1);

  const inputs = [
    ...orderedEntryTypes.filter(entryType => entryType.category === "PHYSICAL_ACTIVITY").map(entryType => ({
      "type": "timer",
      "name": entryType.name,
      "scope": "PHYSICAL_ACTIVITIES",
      "dataStruct": "Entry",
      "dataTemplate": {
        "id": "#",
        "type": entryType.id,
        "subject": "ME",
        "time": "$startTime",
        "duration": "$duration",
        "@struct": "Entry"
      }
    })),
    ...orderedEntryTypes.filter(entryType => entryType.category === "INTELLECTUAL_ACTIVITY").map(entryType => ({
      "type": "timer",
      "name": entryType.name,
      "scope": "INTELLECTUAL_ACTIVITIES",
      "dataStruct": "Entry",
      "dataTemplate": {
        "id": "#",
        "type": entryType.id,
        "subject": "ME",
        "time": "$startTime",
        "duration": "$duration",
        "@struct": "Entry"
      }
    })),
    ...orderedEntryTypes.filter(entryType => entryType.category === "SYMPTOM").map(entryType => ({
      "type": "event-logger",
      "name": entryType.name,
      "scope": "FEELINGS",
      "dataStruct": "Entry",
      "dataTemplate": {
        "id": "#",
        "type": entryType.id,
        "subject": "ME",
        "time": "$time",
        "@struct": "Entry"
      }
    }))
  ];

  return <InputsContext.Provider
    value={{
      inputs
    }}
  >
    {children}
  </InputsContext.Provider>;
};

export const useInputs = () => {
  return useContext(InputsContext);
};
