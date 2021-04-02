import React from "react";
import { Route } from "react-router-native";

import { TabMenu } from "ezwn-ux-native/app-components/TabMenu-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

import { AdminEntryTypeRoot } from "./AdminEntryTypeRoot-cmp";
import { AdminEntryTypeDetailRoot } from "./AdminEntryTypeDetailRoot-cmp";
import { AdminEntryTypeRepositoryProvider } from "features/admin/entry-type/AdminEntryTypeRepository-ctx";

export const id = "EntryTypeCrudFeature";

export const routes = (
  <AdminEntryTypeRepositoryProvider>
    <Route exact path="/admin/entry-type">
      <AdminEntryTypeRoot />
    </Route>
    <Route
      exact
      path="/admin/entry-type/:id"
      component={AdminEntryTypeDetailRoot}
    />
  </AdminEntryTypeRepositoryProvider>
);

export const navigationMenuItems = (
  <TabMenu.Choice routerPush="/admin/entry-type">
    <FontAwesomeTextIcon fontAwesomeIcon="faSitemap" text="Entry types" />
  </TabMenu.Choice>
);
