import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LeafCard from "./components/LeafCard";
import About from "./components/About";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";
import LeafDetails from "./pages/LeafDetails";
import FallingLeaves from "./components/FallingLeaves";
import { leaves, testimonials } from "./data";
import "./App.css";

function Home() {
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
                key={leaf.id}
                id={leaf.id}
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

function App() {
  return (
    <div className="app-container">
      {/* Background Falling Leaves Animation */}
      <FallingLeaves count={18} />

      {/* Main Page Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaves/:id" element={<LeafDetails />} />
      </Routes>
    </div>
  );
}

export default App;