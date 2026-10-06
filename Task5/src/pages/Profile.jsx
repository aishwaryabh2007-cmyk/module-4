import { useState } from "react";
import Navbar from "../components/Navbar";
import { useApp } from "../context/AppContext";

function Profile() {
  const { user } = useApp();

  const [name, setName] = useState(
    user?.name || "Aishwarya BH"
  );

  const [email, setEmail] = useState(
    user?.email || "aishwarya@example.com"
  );

  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(
    "B.Tech AI & Data Science"
  );

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !course) {
      setMessage("Please fill all the fields.");
      return;
    }

    setMessage("Profile updated successfully!");
  };

  return (
    <div>
      <Navbar />

      <main className="page-container">
        <h1>Student Profile</h1>

        <p className="page-description">
          View and update your student information.
        </p>

        <div className="profile-card">
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Phone Number</label>

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
            />

            <label>Course</label>

            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />

            {message && (
              <p className="success-message">
                {message}
              </p>
            )}

            <button type="submit">
              Update Profile
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Profile;