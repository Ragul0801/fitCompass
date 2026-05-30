import React, { useState } from "react";
import Navbar from "../components/Navbar";
import WorkoutCard from "../components/WorkoutCard";

function Workout() {
  const [workouts] = useState([
    { exerciseName: "Push-ups", sets: 3, reps: 15, weight: 0 },
    { exerciseName: "Squats", sets: 4, reps: 20, weight: 225 },
    { exerciseName: "Bench Press", sets: 4, reps: 8, weight: 275 },
    { exerciseName: "Deadlifts", sets: 3, reps: 5, weight: 365 },
    { exerciseName: "Pull-ups", sets: 3, reps: 10, weight: 0 },
    { exerciseName: "Dumbbell Rows", sets: 4, reps: 12, weight: 85 },
  ]);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="workout-container">
          <h1>🏋️ Workout Tracker</h1>
          <div className="workouts-list">
            {workouts.map((workout, index) => (
              <WorkoutCard
                key={index}
                exerciseName={workout.exerciseName}
                sets={workout.sets}
                reps={workout.reps}
                weight={workout.weight}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Workout;