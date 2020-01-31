// To Do
// Api call
// Theme toggle between light and dark theme
// Search
// Filter
// Modal

const countriesEl = document.getElementById('countries');

getCountries();

async function getCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();

  displayCountries(countries);
};


function displayCountries(countries) {
  console.log(countries);

  countries.forEach(country => {

    const countryEl = document.createElement('div');
    countryEl.classList.add('card');

    countryEl.innerHTML = `
    <div>
      <img src="https://restcountries.eu/data/deu.svg" alt="">
    </div
    <div class="card-body">
      <h2>Germany</h2>
      <p><strong>Population:</strong> 81,700,000</p>
      <p><strong>Region:</strong> Europe</p>
      <p><strong>Capital:</strong> Berlin</p>
    </div>
    `;

    countriesEl.appendChild(countryEl);
  });
};

