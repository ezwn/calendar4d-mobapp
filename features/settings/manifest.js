import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";
import { TabMenu } from "ezwn-ux-native/app-components/TabMenu-cmp";

import * as TopicCrudFeature from "./topic/manifest";
import * as EntryTypeCrudFeature from "./entry-type/manifest";
import { SettingsRootView } from "./SettingsRootView-cmp";

export const id = "SettingsFeature";

export const routes = (
  <Route path="/settings">
    <TabMenu>
      {TopicCrudFeature.navigationMenuItems}
      {EntryTypeCrudFeature.navigationMenuItems}
    </TabMenu>
    {TopicCrudFeature.routes}
    {EntryTypeCrudFeature.routes}
    <Route exact path="/settings/server" component={SettingsRootView} />
  </Route>
);

export const navigationMenuItems = (
  <NavigationMenu.Choice routerPush="/settings/topic">
    <FontAwesomeTextIcon fontAwesomeIcon="faToolbox" text="Settings" />
  </NavigationMenu.Choice>
);
