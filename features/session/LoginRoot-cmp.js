import React from "react";

import { VerticalBorderLayout } from "ezwn-ux-native/layouts/VerticalBorderLayout-cmp";
import { TitleBar } from "ezwn-ux-native/app-components/TitleBar-cmp";
import { LoginForm } from "ezwn-react-native-persist-common/LoginForm-cmp";
import { useHistory } from "react-router";

export const LoginRoot = () => {
  const history = useHistory();

  return (
    <VerticalBorderLayout top={<TitleBar text="Please log in" />}>
      <LoginForm onSuccess={() => history.push(`/settings/topic`)} />
    </VerticalBorderLayout>
  );
};
