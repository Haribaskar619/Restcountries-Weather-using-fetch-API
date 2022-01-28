const container = document.createElement("div");
container.setAttribute("class", "container");

const heading = document.createElement("h1");
heading.setAttribute("id","title");
heading.setAttribute("class","text-center");
heading.innerHTML = "Rest Countries Task"
document.body.appendChild(heading);

const row = document.createElement("div");
row.setAttribute("class", "row");

document.body.append(container);
container.appendChild(row)

function allFlag(country) {

  const temp = document.createElement("div");
  temp.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4 ");


  temp.innerHTML = `<div class="card h-100">
            <div class="card-header"><h5>${country.name.common}</h5></div>
            <div class="card-body">
            <img src="${country.flags.png}" alt="${country.name.common}" class="card-img-top">
            <div class="card-text">  
            <p class="card-title1"><span style="font-weight:bold">Captial: </span> ${country.capital } <p>
              <p class="card-title2"><span style="font-weight:bold">Region: </span>${country.region ? country.region : 'NA'} <p>
              <p class="card-title3"><span style="font-weight:bold">Country Code: </span> ${country.fifa ? country.fifa : 'NA' } <p>
              <p class="card-title3"><span style="font-weight:bold">Population: </span> ${country.population ? country.population : 'NA' } <p>
              <a href="#" id="weather" onClick="getCountry('${country.name.common}')" class="btn  btn-outline-light">Click for Weather</a>
            </div>  
            </div>
    </div>`
  row.appendChild(temp)
}

fetch("https://restcountries.com/v3.1/all").then(function (data) {
  return data.json()
})
  .then(function (countryList) {
    const allCountryList = countryList;
    for (country of allCountryList) {
      allFlag(country);
    }

  })
  .catch(function (error) {
    console.log(error);
  })


function getCountry(countryName) {
  fetch(" https://api.openweathermap.org/data/2.5/weather?q=" + countryName + "&appid=30a5cabfb51b703f635483199efb932f")
    .then(function (data) {
      return (data.json());
    })
    .then(function (showWeather) {
      const jsonValue = JSON.stringify(showWeather.main);
      alert(name + ': ' + (jsonValue ? jsonValue : ' Not Found'));
    })
    .catch(function (error) {
      console.log(error);
    })
};







