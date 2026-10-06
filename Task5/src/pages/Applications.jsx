import Navbar from "../components/Navbar";
import { useApp } from "../context/AppContext";

function Applications() {
  const { applications } = useApp();

  return (
    <div>
      <Navbar />

      <main className="page-container">
        <h1>My Applications</h1>

        <p className="page-description">
          Track your applied jobs and application status.
        </p>

        {applications.length === 0 ? (
          <div className="empty-card">
            <h2>No Applications</h2>
            <p>You have not applied for any jobs yet.</p>
          </div>
        ) : (
          <div className="table-container">
            <table className="application-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td>{application.company}</td>
                    <td>{application.role}</td>
                    <td>
                      <span className="status">
                        {application.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

export default Applications;