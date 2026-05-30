
import React from "react";

interface ProgressCardProps {
  title: string;
  value: string | number;
  icon?: string;
}

function ProgressCard({
  title,
  value,
  icon = "📊",
}: ProgressCardProps) {
  return (
    <div className="progress-card">
      <div style={{ fontSize: "32px", marginBottom: "10px" }}>{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default ProgressCard;