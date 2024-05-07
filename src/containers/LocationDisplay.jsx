import { useState } from "react";

export function LocationDisplay() {
  const [location, setLocation] = useState({
    city: "Zagreb",
    country: "Croatia",
  });
  // Fragment pisan skračeno se može pisati kao <>...sadrzaj...</>
  return (
    <>
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
    </>
  );
}
