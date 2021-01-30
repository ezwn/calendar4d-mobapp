import React from "react";

import { CalendarProvider } from "shared/calendar/Calendar-ctx";
import { SchemaProvider } from "ezwn-react-native-data-mng-lang/Schema-ctx";

import schemaText from "./schema.js";

import * as HistoryFeature from "features/history/manifest";
import * as NewEntriesFeature from "features/new-entries/manifest";
import * as StatsFeature from "features/stats/manifest";
import * as SettingsFeature from "features/settings/manifest";
import { SettingsProvider } from "shared/settings/Settings-ctx.js";

export const features = [NewEntriesFeature, StatsFeature, HistoryFeature, SettingsFeature];

export const GlobalProvider = ({ children }) => (
      <SettingsProvider>
            <SchemaProvider schemaText={schemaText}>
                  <CalendarProvider>
                        {children}
                  </CalendarProvider>
            </SchemaProvider>
      </SettingsProvider>
);
