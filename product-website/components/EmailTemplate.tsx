import * as React from "react";

interface EmailTemplateProps {
  email: string;
  name: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  name,
  message,
}) => (
  <div>
    <h1>{name} wants to send a message from AMD-DRONES website</h1>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);

export default EmailTemplate;
