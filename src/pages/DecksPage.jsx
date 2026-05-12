import { useEffect, useState } from "react";
import api from "../api/api.js";
import { Link } from "react-router-dom";

const DecksPage = () => {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const res = await api.get("/decks");
        setDecks(res.data);
      } catch (err) {
        setError("Failed to load decks");
      } finally {
        setLoading(false);
      }
    };
    fetchDecks();
  }, []);
  
  if(loading) return <p>Loading decks...</p>
  if(error) return <p>{error}</p>
  
  return (
    <div>
      <h1>Your Decks</h1>
      <ul>
        {decks.map((deck) => (
          <li key={deck._id}>
            <Link to={`/decks/${deck._id}`}>{deck.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DecksPage;
