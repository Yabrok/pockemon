var elForm = document.querySelector('.js-form');
var elList = document.querySelector('.js-list');
var elSelect = document.querySelector('.js-select');

let newSet = new Set();
pokemons.forEach((item)=>{
  item.type.forEach((type)=>{
    newSet.add(type);
  });
});

newSet.forEach((type)=>{
  let elOption = document.createElement('option');
  elOption.value = type;
  elOption.textContent = type;
  elSelect.appendChild(elOption)
})



function render(arr, node){
  node.innerHTML = '';
  for (pokemon of arr){
    var elItem = document.createElement('li');
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
      
      
      node.appendChild(elItem);
    }
  }
  render(pokemons, elList);
  
  
  let newArr = [];
  elForm.addEventListener('change', ()=>{
    newArr = [];
    if (elSelect.value != 'All'){
      pokemons.forEach((el)=>{
        if (el.type.includes(elSelect.value)){
          newArr.push(el);
          render(newArr, elList);
        };
      });
    }else {
      render(pokemons, elList);
    }
  });
