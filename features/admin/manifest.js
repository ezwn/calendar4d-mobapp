import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

import * as TopicCrudFeature from "./topic/manifest";
import * as EntryTypeCrudFeature from "./entry-type/manifest";
import { TabMenu } from "ezwn-ux-native/app-components/TabMenu-cmp";

export const id = "AdminFeature";

export const routes = (
  <Route path="/admin">
    <TabMenu>
      {TopicCrudFeature.navigationMenuItems}
      {EntryTypeCrudFeature.navigationMenuItems}
    </TabMenu>
    {TopicCrudFeature.routes}
    {EntryTypeCrudFeature.routes}
  </Route>
);

export const navigationMenuItems = (
  <NavigationMenu.Choice routerPush="/admin/topic">
    <FontAwesomeTextIcon fontAwesomeIcon="faToolbox" text="Admin" />
  </NavigationMenu.Choice>
);
