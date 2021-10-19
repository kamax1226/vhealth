import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "../_start/layout/core";
import { MasterLayout } from "../_start/layout/MasterLayout";
import { Logout } from "./modules/auth/Logout";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import { PublicRoutes } from "./routing/PublicRoutes";
import Amplify, { Auth, Hub } from "aws-amplify";
import { awsConfig, awsAuth } from "./config/aws";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import * as auth from "setup/redux/actions/auth.action";
import { cognitoUserModel } from "./models/UserModel";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "setup/redux/reducers";

type Props = {
  basename: string;
};

Amplify.configure(awsConfig);
Auth.configure({ oauth: awsAuth });

const App: React.FC<Props> = ({ basename }) => {
  let isAuthorized = useSelector<RootState>(
    ({ auth }) => auth.user,
    shallowEqual
  );

  const dispatch = useDispatch();

  Auth.currentAuthenticatedUser().then(user => {
    console.log('currentAuthenticatedUser', user)
  }).catch(() => console.log('Not signed in'));

  useEffect(() => {

    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          console.log('sign in', event, data);
          const accessToken: string = data.signInUserSession.accessToken.jwtToken;
          const idToken: string = data.signInUserSession.idToken.jwtToken;
          const refreshToken: string = data.signInUserSession.refreshToken.token;

          dispatch(auth.login(accessToken, idToken, refreshToken));
          const decoded: cognitoUserModel = jwtDecode(data.signInUserSession.idToken.jwtToken)
          dispatch(auth.setUser(decoded));
          break
        case 'signOut':
          console.log('sign out')
          break
      }
    })
  })

  return (
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <Switch>
          <Route path="/logout" component={Logout} />
          {!isAuthorized ? (
            <Route>
              <PublicRoutes />
            </Route>
          ) : (
            <>
              <MasterLayout>
                <PrivateRoutes />
              </MasterLayout>
            </>
          )}
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { App };
