import React, { useState, useEffect } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import axios from "axios";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [cockTails, setCockTails] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let item = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        let drinks = item.data.drinks;

        if (drinks) {
          const newCocktails = drinks.map(item => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            };
          });
          setCockTails(newCocktails);
        } else {
          setCockTails([]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
    fetchData();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <CocktailList cockTails={cockTails} loading={loading} />
    </main>
  );
}
