fetch('https://restcountries.eu/rest/v2/all')
.then((x)=>x.json())
// .then((l)=>l.filter(lan=>lan.languages[0].name==='Spanish'))
// .then((w)=>console.log(w))
.then((c)=>{c.forEach(element => {
    country(element)
});})
.catch(console.log('data in unavailable at the moment'));



const country = ({name, flag, region, population, capital})=>{

    // let allCountries = document.querySelector('.all-countries');
    let allCountries = document.createElement('div');
    let cls = document.createAttribute('class');
    cls.value = 'all-countries';
    allCountries.setAttributeNode(cls);
   allCountries.innerHTML =`
   <div class = 'country'>
   <img src="${flag}">
      <h3>${name}</h3>
   <p>Region: ${region}</p>
   <p>Capital: ${capital}</p>
   <p>population: ${population}</p>`

   document.body.appendChild(allCountries);
   
    //div creation
    // let div = document.createElement('div');
    // let cls = document.createAttribute('class');
    // cls.value = 'country';
    // div.setAttributeNode(cls)
    
    // //img of flag creation
    // let flagImage = document.createElement('img');
    // let src = document.createAttribute('src');
    // src.value = flag;
    // flagImage.setAttributeNode(src);

    // //name creation
    // let cName = document.createElement('p');
    // cName.innerText = `Name: ${name}`;

    // //region creation
    // let r = document.createElement('p');
    // r.innerText = `Region: ${region}`;

    // //population creation
    // let pop = document.createElement('p');
    // pop.innerText = `Population: ${population}`

    // div.appendChild(flagImage);
    // div.appendChild(cName);
    // div.appendChild(r);
    // div.appendChild(pop);
    // allCountries.appendChild(div);


    
}