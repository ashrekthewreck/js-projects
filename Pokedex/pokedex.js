
async function fetchPokemon() {
    try {
        let pokemon = document.querySelector(".user-input");
        let pokemonName = pokemon.value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        document.querySelector(".user-input").value = "";

        if(!response.ok){ // if we could not find out resource
            throw new Error("Could not fetch resource!")
        }

        const data = await response.json();
        console.log(data);
        let pokemonSpriteImage = data.sprites.front_default;
        let imgElement = document.querySelector(".pokemon-img");
        imgElement.src = pokemonSpriteImage;
        imgElement.style.display = "block";

        pokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
        document.querySelector(".pokemon-name").innerHTML = pokemonName;

        let types = data.types.map(t => t.type.name);
        document.querySelector(".pokemon-type").innerHTML =  `${types.map(t => t[0].toUpperCase() + t.slice(1)).join(" / ")}`;
       

    }
    catch(error){
        console.error(error);
    }
    
}

window.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.3; // optional
  music.play();
}, { once: true });

/* 
async function getData() {
  try {
    // Step 1: Fetch the response
    const res = await fetch("https://api.example.com/data");

    // Step 2: Handle HTTP errors
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Step 3: Parse the body (e.g., as JSON)
    const data = await res.json();

    // Step 4: Use the data
    console.log(data);

  } catch (err) {
    // Step 5: Handle any fetch/parsing errors
    console.error("Fetch error:", err);
  }
}

// Call the function
getData();
*/