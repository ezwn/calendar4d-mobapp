import React from "react";

import { CalendarProvider } from "shared/calendar/Calendar-ctx";
import { SchemaProvider } from "ezwn-react-native-data-mng-lang/Schema-ctx";

import schemaText from "./schema.js";

import * as HistoryFeature from "features/history/manifest";
import * as NewEntriesFeature from "features/new-entries/manifest";
import * as StatsFeature from "features/stats/manifest";

import * as SettingsFeature from "features/settings/manifest";
import { SettingsProvider } from "shared/settings/Settings-ctx.js";

import { SessionProvider } from "ezwn-react-native-session/Session-ctx";
import * as SessionFeature from "features/session/manifest";

import * as TopicCrudFeature from "features/topic-crud/manifest";
import * as EntryTypeCrudFeature from "features/entry-type-crud/manifest";

export const features = [
  NewEntriesFeature,
  StatsFeature,
  HistoryFeature,
  TopicCrudFeature,
  EntryTypeCrudFeature,
  SettingsFeature,
  SessionFeature
];

export const GlobalProvider = ({ children }) => (
  <SchemaProvider schemaText={schemaText}>
    <SettingsProvider>
      <SessionProvider dataServerUrl="http://ideapad:9080/api/v1">
        {/* <CalendarProvider> */}
        {children}
        {/* </CalendarProvider> */}
      </SessionProvider>
    </SettingsProvider>
  </SchemaProvider>
);
