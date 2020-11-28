import React from "react";

import { CalendarProvider } from "shared/calendar/Calendar-ctx";
import { SchemaProvider } from "shared/data-mng-lang/Schema-ctx";

import schemaText from "./schema.js";

import * as HistoryFeature from "features/history/manifest";
import * as NewEntriesFeature from "features/new-entries/manifest";
import * as StatsFeature from "features/stats/manifest";

export const features = [NewEntriesFeature, StatsFeature, HistoryFeature];

export const GlobalProvider = ({ children }) => (
      <SchemaProvider schemaText={schemaText}>
            <CalendarProvider>
                  {children}
            </CalendarProvider>
      </SchemaProvider>
);
