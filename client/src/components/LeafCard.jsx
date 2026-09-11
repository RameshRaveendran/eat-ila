import { useNavigate } from "react-router-dom";

function LeafCard({ id, leafType, quantity, location, description }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/leaves/${id}`);
  }

  return (
    <article className="leaf-card">
      <h3>{leafType}</h3>
      <p>Quantity: {quantity}</p>
      <p>Location: {location}</p>
      <p>{description}</p>
      <button type="button" onClick={handleClick}>
        View Details
      </button>
    </article>
  );
}

export default LeafCard;
