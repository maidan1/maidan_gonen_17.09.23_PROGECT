const pokedex = document.getElementById("pokedex");

const fetchPokemon = () => {
  let promises = [];
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
    }));
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon
    .map(
      (pokemon) =>
        ` <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="${pokemon.image}">
    </div>
    <div class="flip-card-back">
      <h2>${pokemon.name}</h2>
      <p>${pokemon.type}</p>
      
    </div>
  </div>
</div> 
`
      // <p>${pokemon.desc}</p>
    )
    .join("");
  pokedex.innerHTML = pokemonHTMLString;
  console.log(pokedex);
};
fetchPokemon();

window.addEventListener("load", () => {
  fetchPokemon();
  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      fetchPokemon();
    }
  });
});

// `
//         <li class="card">
//             <img class="card-image" src="${pokemon.image}"/>
//             <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
//             <p class="card-subtitle">Type: ${pokemon.type}</p>
//         </li>
//     `
