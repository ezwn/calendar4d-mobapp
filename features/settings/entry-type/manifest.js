import React from "react";
import { Route } from "react-router-native";

import { TabMenu } from "ezwn-ux-native/app-components/TabMenu-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

import { SettingsEntryTypeRoot } from "./SettingsEntryTypeRoot-cmp";
import { SettingsEntryTypeDetailRoot } from "./SettingsEntryTypeDetailRoot-cmp";
import { SettingsEntryTypeRepositoryProvider } from "./SettingsEntryTypeRepository-ctx";

export const id = "EntryTypeCrudFeature";

export const routes = (
  <SettingsEntryTypeRepositoryProvider>
    <Route exact path="/settings/entry-type">
      <SettingsEntryTypeRoot />
    </Route>
    <Route
      exact
      path="/settings/entry-type/:id"
      component={SettingsEntryTypeDetailRoot}
    />
  </SettingsEntryTypeRepositoryProvider>
);

export const navigationMenuItems = (
  <TabMenu.Choice routerPush="/settings/entry-type">
    <FontAwesomeTextIcon fontAwesomeIcon="faSitemap" text="Entry types" />
  </TabMenu.Choice>
);
