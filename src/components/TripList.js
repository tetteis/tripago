import { useState } from "react";

export default function TripList() {
  const [trips, setTrips] = useState([]);
  console.log(trips);

  fetch("http://localhost:3000/trips").then((response) => response.json());
  // .then((data) => setTrips(data));

  return (
    <div>
      <h2>TripList</h2>
    </div>
  );
}
