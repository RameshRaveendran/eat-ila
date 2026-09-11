import { useParams } from 'react-router-dom'

function LeafDetails() {
  const { id } = useParams()

  return (
    <section>
      <h2>Leaf Details</h2>
      <p>Selected leaf: {id}</p>
    </section>
  )
}

export default LeafDetails