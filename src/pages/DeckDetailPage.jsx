import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/api";

const DeckDetailPage = () => {
  const { deckId } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const fetchDeck = async (req, res) => {
      try {
        const res = await api.get(`decks/${deckId}`);
        setDeck(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDeck();
  }, [deckId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!deck) return <p>Loading deck...</p>;

  return (
    <div>
      <h1>{deck.name}</h1>

      <h2>Cards</h2>

      <ul>
        {deck.cards.map((c) => (
          <li key={c.card._id}>
            <Link to={`/cards/${c.card._id}`}>{c.card.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeckDetailPage;
