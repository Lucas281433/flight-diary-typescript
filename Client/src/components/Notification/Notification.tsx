import { NotificationProps } from "../../types";

import "./Notification.css";

/**
 * A Notification component that displays an error message when the message
 * prop is not empty. Otherwise, it returns null.
 *
 * @param {NotificationProps} props - Component props containing the message
 * to display.
 * @returns {JSX.Element | null} A div element containing the error message
 * if the message is not empty, or null otherwise.
 */
const Notification = (props: NotificationProps) => {
  if (props.message === "") {
    return null;
  }

  return <div className="error-message">{props.message}</div>;
};

export default Notification;
