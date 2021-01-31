import React from "react";
import { Route } from "react-router-native";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { FontAwesomeTextIcon } from "ezwn-ux-native/text-icons/FontAwsomeTextIcon-cmp";

import { LoginRoot } from "./LoginRoot-cmp";

export const id = "SessionFeature";

export const routes = (
  <React.Fragment>
    <Route exact path="/login">
      <LoginRoot />
    </Route>
  </React.Fragment>
);

export const navigationMenuItems = (
  <>
    <NavigationMenu.Choice routerPush="/login">
      <FontAwesomeTextIcon fontAwesomeIcon="faSignInAlt" text="Sign in" />
    </NavigationMenu.Choice>
  </>
);
