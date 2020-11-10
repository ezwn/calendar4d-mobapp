import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { CalendarTextIcon } from "ezwn-ux-native/text-icons/CalendarTextIcon-cmp";

import { HistoryRoot } from "./HistoryRoot-cmp";
import { EditEntryRoot } from "./EditEntryRoot-cmp";

export const id = "HistoryFeature";

export const routes = (
  <React.Fragment>
    <Route key="history" exact path="/history" component={HistoryRoot} />
    <Route exact path="/history/:id" component={EditEntryRoot} />
  </React.Fragment>
);

export const navigationMenuItems = (
  <>
    <NavigationMenu.Choice routerPush="/history">
      <CalendarTextIcon text="History" />
    </NavigationMenu.Choice>
  </>
);
