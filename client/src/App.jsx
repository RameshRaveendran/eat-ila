import Header from "./components/Header";
import Hero from "./components/Hero";
import LeafCard from "./components/LeafCard";
import About from "./components/About";
import TestimonialCard from "./components/TestimonialCard";
import Footer from './components/Footer'
import { leaves, testimonials } from "./data";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <section className="testimonials">
          <h2>What People Say</h2>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                message={testimonial.message}
                location={testimonial.location}
              />
            ))}
          </div>
        </section>

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
      <Footer />
    </>
  );
}

export default App;
