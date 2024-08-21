async function getPokemon(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Please Enter a valid Pokemon name");
        }
        const data = await response.json();

        const pokemonImage = data.sprites.front_default;
        const pokemonSprite = document.getElementById("pokemonSprite");

        pokemonSprite.src = pokemonImage;
        pokemonSprite.style.display = "block";
        
    }
    catch(error){
        window.alert(error);
        pokemonName.value = "";
    }
}