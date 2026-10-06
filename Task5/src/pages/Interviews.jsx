import Navbar from "../components/Navbar";
import { useApp } from "../context/AppContext";

function Interviews() {
  const { applications } = useApp();

  const interviews = applications.filter(
    (application) =>
      application.status === "Interview Scheduled"
  );

  return (
    <div>
      <Navbar />

      <main className="page-container">
        <h1>Interview Schedule</h1>

        <p className="page-description">
          View your upcoming placement interviews.
        </p>

        {interviews.length > 0 ? (
          <div className="interview-grid">
            {interviews.map((interview) => (
              <div
                className="interview-card"
                key={interview.id}
              >
                <h2>{interview.company}</h2>

                <p>
                  <strong>Position:</strong>{" "}
                  {interview.role}
                </p>

                <p>
                  <strong>Date:</strong> 12 October 2026
                </p>

                <p>
                  <strong>Time:</strong> 10:00 AM
                </p>

                <p>
                  <strong>Mode:</strong> Online
                </p>

                <span className="interview-status">
                  Interview Scheduled
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-card">
            <h2>No Interviews Scheduled</h2>
            <p>
              You currently have no scheduled interviews.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Interviews;