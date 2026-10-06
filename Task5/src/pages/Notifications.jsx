import Navbar from "../components/Navbar";
import { useApp } from "../context/AppContext";

function Notifications() {
  const { notifications } = useApp();

  return (
    <div>
      <Navbar />

      <main className="page-container">
        <h1>Notifications</h1>

        <p className="page-description">
          Stay updated with placement announcements and
          company information.
        </p>

        <div className="notifications-list">
          {notifications.map((notification) => (
            <div
              className="notification-card"
              key={notification.id}
            >
              <h2>{notification.title}</h2>

              <p>{notification.message}</p>

              <span>New</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Notifications;