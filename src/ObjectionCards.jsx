import { useState } from "react";

// Mock transcript spans (normally comes from CW-2 transcript service)
const transcriptSpans = {
  price: {
    ids: ["seg_12"],
    text: "This seems expensive for what we get",
  },
  timing: {
    ids: ["seg_18"],
    text: "The timeline might be too slow for us",
  },
  trust: {
    ids: ["seg_25"],
    text: "How do we know this is reliable?",
  },
  competitor: {
    ids: ["seg_31"],
    text: "We are also evaluating another vendor",
  },
  "think about it": {
    ids: ["seg_40"],
    text: "Let me think about it and get back to you",
  },
};

// Hardcoded objection -> card events mapping with evidence
const objectionMap = {
  price: [
    {
      cardId: "price_objection",
      rationale: "User expresses concern about cost.",
    },
  ],
  timing: [
    {
      cardId: "timing_objection",
      rationale: "User indicates timeline constraints.",
    },
  ],
  trust: [
    {
      cardId: "trust_objection",
      rationale: "User questions reliability or credibility.",
    },
  ],
  competitor: [
    {
      cardId: "competitor_objection",
      rationale: "User mentions evaluating competitors.",
    },
  ],
  "think about it": [
    {
      cardId: "stall_objection",
      rationale: "User delays decision without commitment.",
    },
  ],
};

export default function ObjectionCards() {
  const [objection, setObjection] = useState("");
  const [cards, setCards] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value.toLowerCase();
    setObjection(value);

    if (objectionMap[value]) {
      const evidence = transcriptSpans[value];
      const enrichedCards = objectionMap[value].map((card) => ({
        ...card,
        evidenceSpans: evidence.ids,
        evidenceText: evidence.text,
      }));
      setCards(enrichedCards);
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
              <li key={idx} style={{ margin: "0.75rem 0" }}>
                <strong>{card.cardId}</strong>
                <div>Rationale: {card.rationale}</div>
                <div>Evidence spans: {card.evidenceSpans.join(", ")}</div>
                <div>Evidence text: “{card.evidenceText}”</div>
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
