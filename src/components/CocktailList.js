import React from "react";
import Cocktail from "./Cocktail";

export default function CocktailList({ cockTails, loading }) {
  console.log(cockTails)
  if (loading) {
    return <h2 className="section-title">loading ...</h2>;
  }
  if (cockTails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title"> cocktails</h2>
      <div className="cocktails-center">
        {cockTails.map(item => (
          <Cocktail key={item.id} cocktail={item} />
        ))}
      </div>
    </section>
  );
}
