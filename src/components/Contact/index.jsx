// app/contact/page.js или pages/contact.js

import React from "react";
import TwoGISMap from "../../components/map";

export default function ContactComponent() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Контакты</h1>
      <TwoGISMap />
      <p>Свяжитесь с нами по телефону: +7 (727) 123-45-67</p>
    </div>
  );
}