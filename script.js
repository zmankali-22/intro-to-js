let pokemonTeam = ["Bulbasaur", "Ivysaur", "Charmander", "Chewa"];

function logTheTeam() {
  sortedTeam = pokemonTeam.sort();

  sortedTeam.forEach((pokemon, arrayIndex) => {
    console.log(pokemon + "is at index of " + arrayIndex);
  });

  // let [first, ...others] = sortedTeam

  // console.log(first)
  // console.log(others)

  console.log(pokemonTeam.entries());

  for (const [index, pokemon] of sortedTeam.entries()) {
    console.log(`${pokemon} is at index of ${index}`);
  }
}

// logTheTeam();

const logTheTeamAlternate = (targetsize = 4) => {
  if (pokemonTeam.length == targetsize) {
    console.log("There are 4 pokemon in the team");
  }

  if (pokemonTeam.length === targetsize) {
    console.log("There are 4 pokemon in the team, this is from strict");
  }
};

logTheTeamAlternate();
logTheTeamAlternate(2);
