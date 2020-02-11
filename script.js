// To Do
// Api call
// Theme toggle between light and dark theme
// Search
// Filter
// Modal

const countriesEl = document.getElementById('countries');
const toggleBtn = document.getElementById('toggle');
const filterBtn = document.getElementById('filter');
const searchEl = document.getElementById('search');

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
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Capital:</strong> ${country.capital}</p>
    </div>
    `;

    countriesEl.appendChild(countryEl);
  });
};

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

filterBtn.addEventListener('click', () => {
  filterBtn.classList.toggle('open');
});

searchEl.addEventListener('input', e => {
  const { value } = e.target;
  const countryName = document.querySelectorAll('.country-name');

  countryName.forEach(name => {
    if(name.innerText.toLowerCase().includes(value.toLowerCase())) {
      name.parentElement.parentElement.style.display = 'block';
    } else {
      name.parentElement.parentElement.style.display = 'none';
    }
  });

})