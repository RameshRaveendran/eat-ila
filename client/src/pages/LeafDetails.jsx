import { useParams } from "react-router-dom";
import { leaves } from "../data";
import { useNavigate } from "react-router-dom";

function LeafDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedLeaf = leaves.find((leaf) => leaf.id === id);

  if (!selectedLeaf) {
    return <p>Leaf not found</p>;
  }

return (
  <section className="leaf-details">
    <h2>{selectedLeaf.leafType}</h2>

    <p>Quantity: {selectedLeaf.quantity}</p>
    <p>Location: {selectedLeaf.location}</p>
    <p>{selectedLeaf.description}</p>

    <button type="button" onClick={() => navigate('/')}>
      Back to Leaves
    </button>
  </section>
)
}

export default LeafDetails;
