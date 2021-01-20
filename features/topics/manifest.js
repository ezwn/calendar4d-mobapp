import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";

import { TopicsRoot as TopicsRoot } from "./TopicsRoot-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

export const id = "TopicsFeature";

export const routes = (
  <React.Fragment>
    <Route key="topics" exact path="/topics" component={TopicsRoot} />
  </React.Fragment>
);

export const navigationMenuItems = (
  <>
    <NavigationMenu.Choice routerPush="/topics">
      <FontAwesomeTextIcon fontAwesomeIcon="faCalendarAlt" text="Topics" />
    </NavigationMenu.Choice>
  </>
);
