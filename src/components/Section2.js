import React from "react";
import FruitList from "./FruitList";

export default function Section2() {
  return (
    <section>
      <div className="spacer list">
        <div style={{ marginLeft: 40 }}>
          <FruitList />
        </div>
      </div>
    </section>
  );
}
