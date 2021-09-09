import React, { useContext } from "react";
import { ContactForm } from "../components/contact/contact-form";
import { NotificationContext } from "../context/context";

function Contact() {
  const notificationCtx = useContext(NotificationContext);
  const {showNotification, hideNotification} = notificationCtx;

  function handleMessage(messageData) {
      showNotification({
          title:'Sending Message',
          message: 'Storing your message in MongoDb',
          status:'pending'
      });
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(messageData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
          if(response.ok) {
              return response.json();
          }
          return response.json().then(data => {
              showNotification({
                  title:'Error',
                  status:'error',
                  message:'Something went wrong try latter'
              });
              throw new Error(data.message || 'Something went wrong');
          })
      })
      .then((data) => {
        showNotification({
            title:'Success',
            message: 'Successfully storage your message in MongoDb',
            status:'success'
        });
      });
  }

  return <ContactForm handleMessage={handleMessage} />;
}

export default Contact;
