import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

import { EntryTypeCrudRoot } from "./EntryTypeCrudRoot-cmp";
import { EntryTypeCrudDetailRoot } from "./EntryTypeCrudDetailRoot-cmp";
import { EntryTypeCrudRepositoryProvider } from "shared/entry-type/EntryTypeCrudRepository-ctx";

export const id = "EntryTypeCrudFeature";

export const routes = (
  <EntryTypeCrudRepositoryProvider>
    <Route exact path="/entry-type/crud">
      <EntryTypeCrudRoot />
    </Route>
    <Route exact path="/entry-type/crud/:id" component={EntryTypeCrudDetailRoot} />
  </EntryTypeCrudRepositoryProvider>
);

export const navigationMenuItems = (
  <NavigationMenu.Choice routerPush="/entry-type/crud">
    <FontAwesomeTextIcon fontAwesomeIcon="faSitemap" text="Entry types" />
  </NavigationMenu.Choice>
);
