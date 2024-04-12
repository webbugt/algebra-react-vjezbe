import { useState } from "react";

export function LocationDisplay() {
  const [location, setLocation] = useState({
    city: "Zagreb",
    country: "Croatia",
  });
  return (
    <div>
      <p>
        Grad: {location.city}, Država: {location.country}
      </p>
      <button
        onClick={() => {
          setLocation({ city: "Amsterdam", country: "Nizozemska" });
        }}
      >
        Promijeni Lokaciju
      </button>
    </div>
  );
}
