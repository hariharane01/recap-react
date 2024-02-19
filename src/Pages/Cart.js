import React from "react";
import Navigation from "../Components/Navbar/navbar";
import Slider from "../Components/Slider/slider";
import ProductCard from "../Components/Card.js/ProductCard";
import { data } from "../data";
import { Row, Col } from "react-bootstrap";
export default function Home() {
  return (
    <section>
      {/* Navigation
    slider
    Listening */}

      <Navigation />
      <Slider />
      <div id="product-listing-container" className="container">
        <Row>
          {data.length > 0 ? (
            data.map((d, i) => (
              <Col xs={6} sm={6} md={4} lg={3}>
                <ProductCard key={i} data={d} />
              </Col>
            ))
          ) : (
            <p>Pizza is not available</p>
          )}
        </Row>
      </div>
    </section>
  );
}
