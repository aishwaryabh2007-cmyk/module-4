import { useApp } from "../context/AppContext";

function JobCard({ job }) {
  const { applyForJob } = useApp();

  return (
    <div className="job-card">
      <h2>{job.role}</h2>

      <h3>{job.company}</h3>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <p>
        <strong>Package:</strong> {job.package}
      </p>

      <p>
        <strong>Skills:</strong> {job.skills}
      </p>

      <p>
        <strong>Deadline:</strong> {job.deadline}
      </p>

      <button onClick={() => applyForJob(job)}>
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;