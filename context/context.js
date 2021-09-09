import { createContext, useState, useEffect } from "react";
import React from "react";

export const NotificationContext = createContext({
  notification: null,
  showNotification: (notificationValue) => {},
  hideNotification: () => {},
});

function NotificationContextProvider({ children }) {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [notification]);

  function showNotification(notificationValue) {
    setNotification(notificationValue);
  }

  function hideNotification() {
    setNotification(null);
  }

  const value = {
    notification,
    showNotification,
    hideNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationContextProvider;
