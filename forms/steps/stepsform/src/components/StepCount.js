import React, { useState } from "react";
import StepsForm from "./StepsForm";
import StepsTable from "./StepsTable";

export default function StepsCount() {
  const [walking, setWalking] = useState([]);

  const handleAdd = (walk) => {
    const newWalking = [...walking];
    const sameDate = newWalking.find((o) => o.date === walk.date);

    if (sameDate) {
      sameDate.distance += walk.distance;
    } else {
      newWalking.push(walk);
      newWalking.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    }

    setWalking(newWalking);
  };

  const handleDelete = (id) => {
    setWalking((prevWalks) => prevWalks.filter((o) => o.id !== id));
  };

  return (
    <div className="walk-counter">
      <StepsForm onAdd={handleAdd} />
      <StepsTable walking={walking} onDelete={handleDelete} />
    </div>
  );
}
