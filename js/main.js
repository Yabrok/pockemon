var elBox = document.querySelector(".box");

function func(pokemons) {
    for (pokemon of pokemons) {
      var elCol = document.createElement("div");
      var elColStl = elCol.classList.add( "d-inline-block","w-25", "m-2", "text-center", "bg-success","text-light",);
      var elChild = elBox.appendChild(elCol);
  
      var elPok = document.createElement("img");
      elPok.setAttribute('src', pokemon.img)
      elCol.appendChild(elPok)
  
      var pokName = document.createElement("h2");
      pokName.innerHTML = pokemon.name
      elCol.appendChild(pokName)
  
      var pokColection = document.createElement("p");
      pokColection.innerHTML = pokemon.candy;
      elCol.appendChild(pokColection)
  
      var pokSeries = document.createElement("p");
      pokSeries.innerHTML = pokemon.num;
      elCol.appendChild(pokSeries)
  
      var pocSpawn = document.createElement("p");
      pocSpawn.innerHTML = pokemon.spawn_time;
      elCol.appendChild(pocSpawn)
    }
  }
  func(pokemons);