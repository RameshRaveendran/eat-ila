import { useState } from "react";
import { useParams } from "react-router-dom";

function RequestLeaves() {
  const { id } = useParams();

  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      listingId: id,
      quantity: Number(quantity),
      message,
    });

    setSubmitted(true);
  }

  return (
    <section className="request-leaves">
      <h2>Request Leaves</h2>
      <p>Selected listing ID: {id}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(event) => {
            setQuantity(event.target.value);
            setSubmitted(false);
          }}
          required
        />

        <label htmlFor="message">Message (optional)</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            setSubmitted(false);
          }}
        />

        <button type="submit">Submit Request</button>
      </form>

      {submitted && (
        <p className="success-message" role="status">
          Request submitted successfully!
        </p>
      )}
    </section>
  );
}

export default RequestLeaves;
