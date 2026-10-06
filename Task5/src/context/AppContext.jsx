import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);

  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "TCS",
      role: "Software Developer",
      status: "Under Review",
    },
    {
      id: 2,
      company: "Infosys",
      role: "Data Analyst",
      status: "Interview Scheduled",
    },
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Interview Alert",
      message: "Your Infosys interview is scheduled for tomorrow.",
    },
    {
      id: 2,
      title: "Company Update",
      message: "TCS has opened applications for Software Developer.",
    },
  ]);

  const login = (email, password) => {
    if (email && password) {
      setUser({
        name: "Aishwarya BH",
        email: email,
      });

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const applyForJob = (job) => {
    const alreadyApplied = applications.some(
      (application) => application.company === job.company
    );

    if (!alreadyApplied) {
      setApplications((previousApplications) => [
        ...previousApplications,
        {
          id: previousApplications.length + 1,
          company: job.company,
          role: job.role,
          status: "Applied",
        },
      ]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        applications,
        notifications,
        login,
        logout,
        applyForJob,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}