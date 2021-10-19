import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Switch } from "react-router-dom";
import * as auth from "setup/redux/actions/auth.action";
import { Auth } from "aws-amplify";

export function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    Auth.signOut();
    dispatch(auth.logout());
  }, [dispatch]);

  return (
    <Switch>
      <Redirect to="/" />
    </Switch>
  );
}
