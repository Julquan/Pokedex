// Insert your code here
for (let i = 1; i <= 15; i++) {
  const pokelist = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((result) => result.json())
    .then((pokemon) => {
      //console.log(pokemon);
      document.querySelector(
        "#pokemonContainer"
      ).innerHTML += `<div class="pokemon ${pokemon.types[0].type.name}">
            <div class="imgContainer">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${pokemon.name}" />
                </div>
            <div class="info">
            <h3 class="name">${pokemon.name}</h3>
            <span class="type">Type: <span>${pokemon.types[0].type.name}</span></span>
            </div>
        </div>`;
    });
}

let firstpokemon = 15;
let dernierpokemon = 30;

document.querySelector("#next").addEventListener("click", function () {
  firstpokemon = firstpokemon + 15;
  dernierpokemon = dernierpokemon + 15;
  for (let i = firstpokemon; i < dernierpokemon; i++) {
    const pokelist1 = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((result1) => result1.json())
      .then((pokemon1) => {
        document.querySelector(
          "#pokemonContainer"
        ).innerHTML += `<div class="pokemon ${pokemon1.types[0].type.name}">
    <div class="imgContainer">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" alt="${pokemon1.name}" />
        </div>
    <div class="info">
    <h3 class="name">${pokemon1.name}</h3>
    <span class="type">Type: <span>${pokemon1.types[0].type.name}</span></span>
    </div>
</div>`;
      });
  }
});
