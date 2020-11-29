import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";

import { NewEntriesRoot } from "./NewEntriesRoot-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

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
      <FontAwesomeTextIcon fontAwesomeIcon="faCalendarPlus" text="New entries" />
    </NavigationMenu.Choice>
  </>
);
