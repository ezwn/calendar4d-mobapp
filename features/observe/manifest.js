import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { DumbbellTextIcon } from "ezwn-ux-native/text-icons/DumbbellTextIcon-cmp";
import { PenFancyTextIcon } from "ezwn-ux-native/text-icons/PenFancyTextIcon-cmp";

import { ObserveRoot } from "./ObserveRoot-cmp";

export const id = "ObserveFeature";

export const routes = (
  <React.Fragment>
    <Route exact path="/physical-activities">
      <ObserveRoot title="Physical activities" scope="PHYSICAL_ACTIVITIES" />
    </Route>
    <Route exact path="/intellectual-activities">
      <ObserveRoot title="Intellectual activities" scope="INTELLECTUAL_ACTIVITIES" />
    </Route>
    <Route exact path="/feelings">
      <ObserveRoot title="Feelings and symptoms" scope="FEELINGS" />
    </Route>
  </React.Fragment>
);

export const navigationMenuItems = (
  <>
    <NavigationMenu.Choice routerPush="/physical-activities">
      <DumbbellTextIcon text="Physical" />
    </NavigationMenu.Choice>
    <NavigationMenu.Choice routerPush="/intellectual-activities">
      <DumbbellTextIcon text="Intellectual" />
    </NavigationMenu.Choice>
    <NavigationMenu.Choice routerPush="/feelings">
      <PenFancyTextIcon text="Feelings" />
    </NavigationMenu.Choice>
  </>
);
