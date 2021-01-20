import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";

import { EntryTypesRoot } from "./EntryTypesRoot-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

export const id = "EntryTypesFeature";

export const routes = (
  <React.Fragment>
    <Route key="entryTypes" exact path="/entry-types" component={EntryTypesRoot} />
  </React.Fragment>
);

export const navigationMenuItems = (
  <>
    <NavigationMenu.Choice routerPush="/entry-types">
      <FontAwesomeTextIcon fontAwesomeIcon="faCalendarAlt" text="Entry types" />
    </NavigationMenu.Choice>
  </>
);
