import React from 'react';
import Container from './../components/container';

export default () => (
  <Container>
    <div className="thankyou">
      <div>
        <h2>Pickup request submission successful!</h2>
        <p>Our representative will contact you shortly.</p>
      </div>
    </div>

    <style jsx>{`
      .thankyou {
        padding: 3rem 1rem;
        border: 1px solid #ccc;
        min-height: 300px;
        margin: 60px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </Container>
);
