
import React, { useState } from "react";

interface WorkoutCardProps {
  exerciseName: string;
  sets: number;
  reps: number;
  weight: number;
}

function WorkoutCard({
  exerciseName,
  sets,
  reps,
  weight,
}: WorkoutCardProps) {
  const [completed, setCompleted] = useState(false);

  return (
    <div
      className="workout-card"
      onClick={() => setCompleted(!completed)}
      style={{
        opacity: completed ? 0.7 : 1,
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      <div style={{ fontSize: "24px", marginBottom: "10px" }}>
        {completed ? "✅" : "⚪"}
      </div>
      <h3>{exerciseName}</h3>
      <p>📊 Sets: {sets}</p>
      <p>🔢 Reps: {reps}</p>
      {weight > 0 && <p>⚖️ Weight: {weight} lbs</p>}
      <p style={{ marginTop: "15px", fontSize: "12px", opacity: 0.9 }}>
        Click to mark {completed ? "incomplete" : "complete"}
      </p>
    </div>
  );
}

export default WorkoutCard;