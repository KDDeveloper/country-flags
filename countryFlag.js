//Search Bar
var sBar = document.createElement('div');
sBar.setAttribute('class','search-bar');
document.body.append(sBar);

var filters = document.createElement('div');
filters.setAttribute('class', 'filters');
sBar.appendChild(filters);
filters.innerHTML='<p>Filters <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></p>'


var searchInput = document.createElement('input');
searchInput.setAttribute('type',"search");
searchInput.setAttribute('placeholder',"Please select a filter first");
searchInput.setAttribute('id','search');
sBar.appendChild(searchInput);

var searchBtn = document.createElement('input');
searchBtn.setAttribute('type',"submit");
searchBtn.setAttribute('value',"search");
searchBtn.setAttribute('id','search-btn');
searchBtn.setAttribute('onclick','fetchFilteredCountries()');
sBar.appendChild(searchBtn);


let filterTypes = document.createElement('div');
filterTypes.setAttribute('class','filter-types');
document.body.appendChild(filterTypes);

let filterNames = ['Region','Name','Starts from letter','Languages'];
let id = ['one','two','three','four']
let idNumber=0
filterNames.forEach((e)=>{
    let p = document.createElement('p');
    p.setAttribute('id',id[idNumber]);
    p.innerText = `${e}`;
        filterTypes.appendChild(p);
    idNumber++;
})

let filter = document.querySelectorAll('.filter-types p');
let oldSelect;
let selected;
    // console.log(selected);
let useFilter = () => {
    filters.addEventListener('click',()=>{
        filters.classList.toggle('f-toggle');
        let fSvg = document.querySelector('.filters svg');
        fSvg.classList.toggle('f-toggle-svg');
        filterTypes.classList.toggle('f-type-toggle');
    })

    
        
    for(let i = 0; i<filter.length; i++){
    //    console.log(filter[i])
        
        filter[i].addEventListener('click',()=>{
            selected = i
            filter[i].classList.toggle('f-toggle')
            filter[i].setAttribute('toggle','true');
            if(oldSelect!==undefined){
            filter[oldSelect].classList.toggle('f-toggle');
            filter[oldSelect].setAttribute('toggle','false');
        }
            // console.log('hi')
            oldSelect = i;
        })
    }
}

useFilter();

//main div
let allCountries = document.createElement('div');
let cls = document.createAttribute('class');
cls.value = ' row all-countries';
allCountries.setAttributeNode(cls);
document.body.appendChild(allCountries);


//normal results
window.addEventListener('load',fetchCountries());
async function fetchCountries(){
await fetch('https://restcountries.eu/rest/v2/all')
.then((x)=>x.json())
// .then((y)=>console.log(y))
.then((c)=>{c.forEach(element => {
    country(element)
});})
.catch(console.log('data in unavailable at the moment'));
}

// filtered results
async function fetchFilteredCountries(){
    allCountries.innerHTML=''
    
    
        if(selected!==undefined){
        if(selected===0){
            // console.log(filter[i])
            await fetch('https://restcountries.eu/rest/v2/all')
            .then((x)=>x.json())
            .then((l)=>l.filter(lan=>lan.region===`${searchInput.value}`))
        
            
            // .then((w)=>console.log(w))
            
            .then((c)=>{if(c.length===0){
                allCountries.innerHTML='<p style="text-align:center;">Please Check the spelling or change the search word..Its a Big world!(Try starting with a capital letter)</p>'
             } else{
                c.forEach(element => {
                    country(element)
             })};})    

        }

        if(selected===1){
            await fetch('https://restcountries.eu/rest/v2/all')
            .then((x)=>x.json())
            .then((l)=>l.filter(lan=>lan.name===`${searchInput.value}`))
        
            
        
            
            
             .then((c)=>{if(c.length===0){
                allCountries.innerHTML='<p style="text-align:center;">Please Check the spelling or change the search word..Its a Big world!(Try starting with a capital letter)</p>'
             } else{
                c.forEach(element => {
                    country(element)
             })};})    
        }

        if(selected===2){
            await fetch('https://restcountries.eu/rest/v2/all')
            .then((x)=>x.json())
            .then((l)=>l.filter(lan=>lan.name.split('')[0]===`${searchInput.value}`))
        
            
            
            
            
             .then((c)=>{if(c.length===0){
                allCountries.innerHTML='<p style="text-align:center;">Please Check the spelling or change the search word..Its a Big world!(Try starting with a capital letter)</p>'
             } else{
                c.forEach(element => {
                    country(element)
             })};})
             
             
        }
        
        if(selected===3){
            await fetch('https://restcountries.eu/rest/v2/all')
            .then((x)=>x.json())
            .then((l)=>l.filter(lan=>lan.languages[0].name===`${searchInput.value}`))
        
            
            
            
            
             .then((c)=>{if(c.length===0){
                allCountries.innerHTML='<p style="text-align:center;">Please Check the spelling or change the search word..Its a Big world!(Try starting with a capital letter)</p>'
             } else{
                c.forEach(element => {
                    country(element)
             })};})
             
             
        }
        } else{
            allCountries.innerHTML='<p style="text-align:center;">Please select a filter</p>'
        }
        
     }
    //  .catch(console.log('data in unavailable at the moment'));
    


const country = ({name, flag, region, population, capital})=>{

    let country = document.createElement('div');
    let cls = document.createAttribute('class');
    cls.value = 'col-lg-auto col-md-auto country';
    country.setAttributeNode(cls);
    allCountries.appendChild(country)
    
   country.innerHTML =`
   <img src="${flag}">
      <h3>${name}</h3>
   <p>Region: ${region}</p>
   <p>Capital: ${capital}</p>
   <p>population: ${population}</p>`

   
   
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