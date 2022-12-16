
var elList = document.querySelector('.js-list') ;


  for (pokemon of pokemons){
    var elItem = document.createElement('li');
    // var pocNum = document.createElement('p');
    // pocNum.textContent = pokemon.id
    // elItem.appendChild(pocNum);


    var pokPic = document.createElement('img')
    pokPic.setAttribute('src', pokemon.img)
    elItem.appendChild(pokPic);

    var pokName = document.createElement('h3');
    pokName.textContent = pokemon.name;
    elItem.appendChild(pokName);

    var pocNum = document.createElement('p');
    pocNum.textContent = pokemon.num;
    elItem.appendChild(pocNum);

    var pokType = document.createElement('p');
    pokType.textContent = pokemon.type
    elItem.appendChild(pokType);

    var pokCandy = document.createElement('p');
    pokCandy.textContent = pokemon.candy
    elItem.appendChild(pokCandy);

    elItem.classList.add("d-flex", "flex-column", "align-items-center", "border", "border-danger", "bg-danger", "text-white")

    elItem.style.width = '300px'
    elItem.style.marginBottom = '30px'
    elItem.style.borderRadius = '10px'
    

    elList.appendChild(elItem);
  }




















