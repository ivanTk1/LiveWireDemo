import { useState } from "react";

// Hardcoded objection -> cards mapping
const objectionMap = {
  price: [
    "Totally fair — what would make this feel like a no-brainer?",
    "Let's explore ROI to justify cost.",
  ],
  timing: [
    "I understand, would a faster delivery help?",
    "We can adjust the schedule if needed.",
  ],
  trust: [
    "Here’s our client success stories.",
    "We are ISO-certified and fully compliant.",
  ],
  competitor: [
    "How does our solution compare to X?",
    "Here’s what differentiates us clearly.",
  ],
  "think about it": [
    "Take your time — when should we follow up?",
    "Would more info help with your decision?",
  ],
};

export default function ObjectionCards() {
  const [objection, setObjection] = useState("");
  const [cards, setCards] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value.toLowerCase();
    setObjection(value);

    if (objectionMap[value]) {
      setCards(objectionMap[value]);
    } else {
      setCards([]);
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <h2>Objection → Cards Mock Generator</h2>
      <input
        type="text"
        value={objection}
        onChange={handleInput}
        placeholder="Type an objection (e.g. price)"
        style={{ padding: "0.5rem", width: "300px", marginBottom: "1rem" }}
      />
      <div>
        {cards.length > 0 ? (
          <ul>
            {cards.map((card, idx) => (
              <li key={idx} style={{ margin: "0.5rem 0" }}>
                {card}
              </li>
            ))}
          </ul>
        ) : (
          <p>No cards for this objection</p>
        )}
      </div>
    </div>
  );
}
