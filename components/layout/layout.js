import React, { Fragment, useContext } from "react";
import Nav from "./nav";
import Notification from "../ui/notification";
import { NotificationContext } from "../../context/context";

function Layout({ children }) {
  const notificationCtx = useContext(NotificationContext);
    const {notification} = notificationCtx;
  return (
    <Fragment>
      <Nav />
      <main>{children}</main>
      {notification && <Notification {...notification} />}
    </Fragment>
  );
}

export default Layout;
