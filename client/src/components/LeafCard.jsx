function LeafCard({ leafType, quantity, location, description }) {
  return (
    <article className="leaf-card">
      <h3>{leafType}</h3>

      <p>Quantity: {quantity}</p>

      <p>Location: {location}</p>

      <p>{description}</p>

      <button type="button">View Details</button>
    </article>
  )
}

export default LeafCard