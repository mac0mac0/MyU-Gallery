import React, { useState } from "react";

const cardData = [
  {
    id: 1,
    image:
      "https://media.discordapp.net/attachments/1155772738858913792/1380754020984946688/image.webp?ex=684506e3&is=6843b563&hm=7b461523c39e4ed16adc6d45c83635d62a7d1243808da5b94c7b9e40fd7064f4&=&format=webp",
    number: 1,
    rarity: "Rare",
    tags: ["Rare", "162292", "Pallete"],
  },
  {
    id: 2,
    image:
      "https://media.discordapp.net/attachments/1155772738858913792/1380755105233764382/image.webp?ex=684507e6&is=6843b666&hm=7dcbf82298efa950d5dca227f93caadae3a59339ce1e4a63ff10282764e1e908&=&format=webp",
    number: 2,
    rarity: "Common",
    tags: ["Cannes", "Red Carpet", "Dress"],
  },
  // Add more cards here...
];

export default function App() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("number");

  const filteredCards = cardData
    .filter((card) =>
      [...card.tags, card.rarity.toLowerCase()].some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortKey === "number") return a.number - b.number;
      if (sortKey === "rarity") return a.rarity.localeCompare(b.rarity);
      return 0;
    });

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Card Gallery</h1>

      <input
        type="text"
        placeholder="Search by tag or rarity..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />

      <button onClick={() => setSortKey("number")}>Sort by Number</button>
      <button
        onClick={() => setSortKey("rarity")}
        style={{ marginLeft: "10px" }}
      >
        Sort by Rarity
      </button>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        {filteredCards.map((card) => (
          <div
            key={card.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <p>
                <strong>Number:</strong> {card.number}
              </p>
              <p>
                <strong>Rarity:</strong> {card.rarity}
              </p>
              <p>
                <strong>Tags:</strong> {card.tags.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
