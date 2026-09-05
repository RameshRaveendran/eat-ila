import Header from "./components/Header";
import Hero from "./components/Hero";
import LeafCard from "./components/LeafCard";
import { leaves } from "./data";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="leaf-listings">
          <h2>Available Leaves</h2>

          <div className="leaf-grid">
            {leaves.map((leaf) => (
              <LeafCard
                key={leaf.leafType}
                leafType={leaf.leafType}
                quantity={leaf.quantity}
                location={leaf.location}
                description={leaf.description}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
