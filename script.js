// To Do
// Api call
// Theme toggle between light and dark theme
// Search
// Filter
// Modal

const countriesEl = document.getElementById('countries');
const toggleBtn = document.getElementById('toggle');
const filterBtn = document.getElementById('filter');
const regionFilters = filterBtn.querySelectorAll('li');
const searchEl = document.getElementById('search');
const modal = document.getElementById('modal');

getCountries();

async function getCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();

  displayCountries(countries);
};


function displayCountries(countries) {
  countriesEl.innerHTML = '';

  countries.forEach(country => {

    const countryEl = document.createElement('div');
    countryEl.classList.add('card');

    countryEl.innerHTML = `
    <div>
      <img src="${country.flag}" alt="${country.name}">
    </div>
    <div class="card-body">
      <h2 class="country-name">${country.name}</h2>
      <p><strong>Population:</strong> ${country.population}</p>
      <p class="country-region"><strong>Region:</strong> ${country.region}</p>
      <p><strong>Capital:</strong> ${country.capital}</p>
    </div>
    `;

    countryEl.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    countriesEl.appendChild(countryEl);
  });
};

// Toggle theme - dark or light
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Show and hide the filters(li tags)
filterBtn.addEventListener('click', () => {
  filterBtn.classList.toggle('open');
});

searchEl.addEventListener('input', e => {
  const { value } = e.target;
  const countryName = document.querySelectorAll('.country-name');

  countryName.forEach(name => {
    if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
      // .crd -> .card-body -> .country-name
      name.parentElement.parentElement.style.display = 'block';
    } else {
      name.parentElement.parentElement.style.display = 'none';
    }
  });

});

// Add a filter on the li's inside the .dropdown
regionFilters.forEach(filter => {
  filter.addEventListener('click', () => {
    const value = filter.innerText;
    const countryRegion = document.querySelectorAll('.country-region');

    countryRegion.forEach(region => {
      if(region.innerText.includes( value ) || value === 'All') {
        // .card -> .card-body -> .country-region
        region.parentElement.parentElement.style.display = 'block';
      } else {
        region.parentElement.parentElement.style.display = 'none';
      }
    });
  });
});
