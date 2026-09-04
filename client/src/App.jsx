import Header from "./components/Header";
import Hero from "./components/Hero";
import LeafCard from "./components/LeafCard";
import { leaves } from './data'


function App() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        <section>
          <h2>Available Leaves</h2>

          {leaves.map((leaf) => (
            <LeafCard
              key={leaf.leafType}
              leafType={leaf.leafType}
              quantity={leaf.quantity}
              location={leaf.location}
              description={leaf.description}
            />
          ))}
        </section>

      </main>
    </>
  );
}

export default App;
