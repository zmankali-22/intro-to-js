

let pokemonTeam = [
     "Bulbasaur",
   "Ivysaur",
 "Charmander",

 
]


function logTheTeam() {
    sortedTeam = pokemonTeam.sort()

    sortedTeam.forEach((pokemon, arrayIndex) => {
        console.log(pokemon + "is at index of " + arrayIndex );
    });

    // let [first, ...others] = sortedTeam

    // console.log(first)
    // console.log(others)

    console.log(pokemonTeam.entries());

    for (const [index, pokemon] of sortedTeam.entries()) { 
        console.log(`${pokemon} is at index of ${index}`)
    }


}

logTheTeam();