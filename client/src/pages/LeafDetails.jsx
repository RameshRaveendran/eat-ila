import { useParams } from 'react-router-dom'
import { leaves } from '../data'

function LeafDetails() {
  const { id } = useParams()

  const selectedLeaf = leaves.find((leaf) => leaf.id === id)

  if (!selectedLeaf) {
    return <p>Leaf not found</p>
  }

  return (
    <section>
      <h2>Leaf Details</h2>
      <p>{selectedLeaf.leafType}</p>
      <p>{selectedLeaf.quantity}</p>
      <p>{selectedLeaf.location}</p>
      <p>{selectedLeaf.description}</p>
    </section>
  )
}

export default LeafDetails