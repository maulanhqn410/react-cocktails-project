import React from "react";

export default function SearchForm({ setSearchTerm, searchTerm }) {
  const handleSubmit = e => {
    e.preventDefault()
  };
  const handleChange = e => {
    let target = e.target;
    let name = e.target.name;
    let data = target.type === "checked" ? target.checked : target.value;
    setSearchTerm(data)
  };
  return (
    <section className="section">
      <h2 className="section-title">search cocktails</h2>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
}
