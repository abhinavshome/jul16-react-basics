import React, { useState } from "react";
import "./ContactList.css";

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: "Sachin Tendulkar",
      messages: ["Hey how are you?", "last match was great"],
    },
    {
      id: 2,
      name: "Virat Kohli",
      messages: ["I got out early today", "the ball ws not coming on bat"],
    },
    {
      id: 3,
      name: "Harshal Patel",
      messages: ["I in tem India now", "Liked bowling today"],
    },
  ];
  const [selectedPlayer, setSelectedPlayer] = useState(1);
  return (
    <div className="wrapper">
      <div>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => setSelectedPlayer(contact.id)}
            style={{ color: selectedPlayer === contact.id ? "red" : "black" }}
          >
            {contact.name}
          </div>
        ))}
      </div>
      <div>
        {contacts
          .find((c) => c.id === selectedPlayer)
          .messages.map((message, i) => (
            <div key={i}>{message}</div>
          ))}
      </div>
    </div>
  );
};

export default ContactList;
