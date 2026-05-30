import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProgressCard from "../components/ProgressCard";

function Dashboard() {
  const [stats] = useState([
    { title: "BMI", value: "22.5", icon: "📊" },
    { title: "Workout Streak", value: "7 Days", icon: "🔥" },
    { title: "Calories Burned", value: "2,450", icon: "🔥" },
    { title: "Total Workouts", value: "42", icon: "💪" },
  ]);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="dashboard-container">
          <h1>📈 Your Dashboard</h1>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <ProgressCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;