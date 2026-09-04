function LeafCard({ leafType, quantity, location, description }) {
  return (
    <article>
      <h3>{leafType}</h3>

      <p>Quantity: {quantity}</p>

      <p>Location: {location}</p>

      <p>{description}</p>

      <button type="button">View Details</button>
    </article>
  )
}

export default LeafCard