import { NotificationManager } from "react-notifications";

const NotificationsSend = (type, title, subtitle="") => {
  switch (type) {
    case "info":
      NotificationManager.info(subtitle,title);
      break;
    case "success":
      NotificationManager.success(subtitle, title);
      break;
    case 'warning':
      NotificationManager.warning(subtitle, title);
      break;
    default:
      NotificationManager.error(subtitle, title);
      // NotificationManager.error("Error message", "Click me!", 5000);
      break;
  }
};

export default NotificationsSend;