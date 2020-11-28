import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { DumbbellTextIcon } from "ezwn-ux-native/text-icons/DumbbellTextIcon-cmp";

import { NewEntriesRoot } from "./NewEntriesRoot-cmp";

export const id = "NewEntryFeature";

export const routes = (
  <React.Fragment>
    <Route exact path="/create-entries">
      <NewEntriesRoot />
    </Route>
  </React.Fragment>
);

export const navigationMenuItems = (
  <>
    <NavigationMenu.Choice routerPush="/create-entries">
      <DumbbellTextIcon text="New entries" />
    </NavigationMenu.Choice>
  </>
);
