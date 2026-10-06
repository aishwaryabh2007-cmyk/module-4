import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import { useApp } from "../context/AppContext";

function Dashboard() {
  const { user, applications } = useApp();

  const interviews = applications.filter(
    (application) => application.status === "Interview Scheduled"
  ).length;

  const selected = applications.filter(
    (application) => application.status === "Selected"
  ).length;

  return (
    <div>
      <Navbar />

      <main className="dashboard">
        <div className="welcome">
          <h1>Welcome, {user?.name || "Student"}!</h1>
          <p>Manage your placement activities from one place.</p>
        </div>

        <div className="stats-grid">
          <StatCard
            title="Total Jobs Applied"
            value={applications.length}
          />

          <StatCard
            title="Applications Under Review"
            value={
              applications.filter(
                (application) =>
                  application.status === "Under Review"
              ).length
            }
          />

          <StatCard
            title="Interviews Scheduled"
            value={interviews}
          />

          <StatCard
            title="Students Selected"
            value={selected}
          />
        </div>

        <div className="dashboard-sections">
          <div className="dashboard-card">
            <h2>Quick Actions</h2>

            <Link to="/jobs">View Job Openings</Link>
            <Link to="/applications">My Applications</Link>
            <Link to="/interviews">Interview Schedule</Link>
            <Link to="/notifications">Notifications</Link>
          </div>

          <div className="dashboard-card">
            <h2>Upcoming Deadlines</h2>

            <p>TCS - 15 October 2026</p>
            <p>Infosys - 18 October 2026</p>
            <p>Wipro - 20 October 2026</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;