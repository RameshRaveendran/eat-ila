function TestimonialCard({ name, message, location }) {
  return (
    <article className="testimonial-card">
      <h3>{name}</h3>

      <p>{message}</p>

      <span>{location}</span>
    </article>
  )
}

export default TestimonialCard