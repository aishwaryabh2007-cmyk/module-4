import { useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import jobs from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const locations = ["All", ...new Set(jobs.map((job) => job.location))];

  const filteredJobs = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      job.company.toLowerCase().includes(searchText) ||
      job.role.toLowerCase().includes(searchText) ||
      job.skills.toLowerCase().includes(searchText);

    const matchesLocation =
      location === "All" || job.location === location;

    return matchesSearch && matchesLocation;
  });

  return (
    <div>
      <Navbar />

      <main className="page-container">
        <h1>Job Openings</h1>

        <p className="page-description">
          Search and filter available placement opportunities.
        </p>

        <div className="filters">
          <input
            type="text"
            placeholder="Search company, role or skill..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="jobs-grid">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <p className="no-results">
              No jobs found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Jobs;