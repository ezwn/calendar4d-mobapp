import React from "react";

import { CalendarProvider } from "shared/calendar/Calendar-ctx";

import schemaText from "./schema";
import { SchemaProvider } from "shared/data-mng-lang/Schema-ctx";

import * as HistoryFeature from "features/history/manifest";
import * as NewEntriesFeature from "features/new-entries/manifest";
import * as StatsFeature from "features/stats/manifest";

import * as SettingsFeature from "features/settings/manifest";
import { SettingsProvider } from "shared/settings/Settings-ctx";

import * as EntryTypesFeature from "features/entry-types/manifest";
import { EntryTypesProvider } from "shared/entry-types/EntryTypes-ctx";

import * as TopicsFeature from "features/topics/manifest";
import { TopicsProvider } from "shared/topics/Topics-ctx";

export const features = [NewEntriesFeature, StatsFeature, HistoryFeature, EntryTypesFeature, TopicsFeature, SettingsFeature];

export const GlobalProvider = ({ children }) => (
      <SettingsProvider>
            <SchemaProvider schemaText={schemaText}>
                  <TopicsProvider>
                        <EntryTypesProvider>
                              <CalendarProvider>
                                    {children}
                              </CalendarProvider>
                        </EntryTypesProvider>
                  </TopicsProvider>
            </SchemaProvider>
      </SettingsProvider>
);
