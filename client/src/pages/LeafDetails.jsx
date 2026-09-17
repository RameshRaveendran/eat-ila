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
    <section>
      <h2>Leaf Details</h2>
      <p>{selectedLeaf.leafType}</p>
      <p>{selectedLeaf.quantity}</p>
      <p>{selectedLeaf.location}</p>
      <p>{selectedLeaf.description}</p>
      <button type="button" onClick={() => navigate("/")}>
        Back to Leaves
      </button>
    </section>
  );
}

export default LeafDetails;
