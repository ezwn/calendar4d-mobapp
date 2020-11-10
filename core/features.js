import React from "react";

import { InputsProvider } from "shared/inputs/Inputs-ctx";
import { CalendarProvider } from "shared/calendar/Calendar-ctx";
import { SchemaProvider } from "shared/data-mng-lang/Schema-ctx";

import schemaText from "./schema.js";

import * as HistoryFeature from "features/history/manifest";
import * as ActivityFeature from "features/observe/manifest";
import * as StatsFeature from "features/stats/manifest";

export const features = [ActivityFeature, StatsFeature, HistoryFeature];

export const GlobalProvider = ({ children }) => (
      <SchemaProvider schemaText={schemaText}>
            <CalendarProvider>
                  <InputsProvider>
                        {children}
                  </InputsProvider>
            </CalendarProvider>
      </SchemaProvider>
);
